import { Component, OnInit } from '@angular/core';
import { ExponentialPipe } from '../shared/pipes/exponential/exponential.pipe';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  power = 10; // sera el valor inicial
  title = 'proyecto-angular';

// A partir de aquí se hara un Array //
  items = ['Juan', 'Pedro', 'Carlos'];

// Funciones: van al final de codigo, después de las declaraciones.
  addItem(): void {
    this.items.push('Nuevo Item');
  }

// Aquí borramos por la posición index y un (1) elemento a la vez //
  deleteItem(index: number): any {
    this.items.splice(index, 1);
  }

  constructor(
    private exponentialpipe: ExponentialPipe) { }

  ngOnInit(): void {
  }

}
