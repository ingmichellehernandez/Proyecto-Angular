import { Component, OnInit, AfterViewInit } from '@angular/core'; // AfterViewInit indica cuando los elementos hijos ya fueron rendirizados.

import Swiper from 'swiper'; // lo importamos para poder usar bien el estilo o la libreria.


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper; // elemento de tipo swiper.

  constructor() { }

  ngOnInit(): void {
  }

// Implementamos el método y se inicializa el plugin.
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container');
  }

}
