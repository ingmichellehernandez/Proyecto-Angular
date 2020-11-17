import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// importamos de angula en mo
import { Router } from '@angular/router';
// importamos "services" para crear el producto.
import { ProductsService } from '../../../core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dates: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.buildDates();
   }

  ngOnInit(): void {
  }
  saveProduct(event: Event): void {
    event.preventDefault();
    if (this.dates.valid){
      const product = this.dates.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }
  
  // Crearemos un método "private", llamaremos la instancia de "formBuild" y mostrar un grupo basados en un Json.
  // Luego los parametros es lo que necesitamos saber del E-Commerce.
  // Dentro del array, el primer items es el estado inicial y el segundo items que es un array sera las validaciones requeridas.
  private buildDates(): any {
    this.dates = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
  // a parte de que el campo sea requerido, tendra nuetsra validacion ya creada.
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
      });
    }
}
