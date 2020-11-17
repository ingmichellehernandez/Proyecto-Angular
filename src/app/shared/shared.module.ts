import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importar "RouterModule" para que header pueda usar los link.
import { RouterModule } from '@angular/router';
// Importamos ReactiveFormsModule para usar formulario reactivo.
import { ReactiveFormsModule } from '@angular/forms';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Estilos que se usaran en el header:
import { MaterialModule } from '../material/material.module';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
],

exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
],

  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class SharedModule { }
