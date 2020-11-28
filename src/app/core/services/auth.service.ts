import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    // puede ser asi "private angularFireAuth: AngularFireAuth" o asi:
    private af: AngularFireAuth
  ) { }

// primero crearemos el metodo que sera "crear usuario" se pedira el correo y clave.
  createUser(email: string, password: string) {

//  segundo elegimos el metodo de autentificacion que tendra como parametros "email y pasword" es lo que recibe.
// como este metodo devuelve una promesa, se retorna y se usarla en el formulario de registro.
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
        return this.af.signInWithEmailAndPassword(email, password);
      }

  logout() {
    return this.af.signOut();
  }

// tenemos un usuario o hay un usuario?
// "authState" es un observable
  hasUser() {
    return this.af.authState;
// al suscribirnos nos dira automaticamente si hay un usuario o no.
  }
}
