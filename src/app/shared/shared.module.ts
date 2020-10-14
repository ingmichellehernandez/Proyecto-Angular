import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExponentialPipe } from './pipes//exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Importar "RouterModule" para que header pueda usar los link.
import { RouterModule } from '@angular/router';

// Estilos que se usaran en el header:
import { MaterialModule } from '../material/material.module';


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
    MaterialModule

  ]
})
export class SharedModule { }
