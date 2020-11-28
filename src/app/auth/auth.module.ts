import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';


import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({

// en declaraciones colocamos los componentes que se encuentran internos.
  declarations: [
    LoginComponent,
    RegisterComponent
  ],

  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class AuthModule { }
