import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
// si el formulario es valido, yo necesito los varores de ese formulario:
    if (this.form.valid) {
      const value = this.form.value;
// luego se envian estos parametros:
      this.authService.loginUser(value.email, value.password)
// si todo salio bien, se redirecciona al modulo de administracion:
      .then(() => {
        this.router.navigate(['/admin']);
      })
// si el usuario ingresa un dato invalido, se mostrara un mensaje:
      .catch(() => {
        alert('no es valido');
      });
    }
  }


  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}