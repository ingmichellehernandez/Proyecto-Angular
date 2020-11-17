import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

// map se usa para transformar, lo usaremos para el contador (usaremos un pipe).
import { map } from 'rxjs/operators';

import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

// variable que inicialia en cero
// total = 0;


// De esta forma no se usa el subscribe aqui sino una suscripcion que usa angular mas eficientemente.
total$: Observable<number>;
  constructor(
    private cartService: CartService
)
  {
    this.total$ = this.cartService.cart$
    .pipe(
//  obtenomos los productos y sentenciamos como lo vamos a transformar.
// transformacion -> es uan lista de productos y se trasformara a un solo valor que sera el tamaño de la lista.
      map(products => products.length)
    );
  }




// {
// aqui lo que haremos es una escucha, escuchar cada vez que se agregue al carrito, con un subscribe.
// obtendremos todos los productos que se vayan agregando al carrito e imprimos los productos que vayan llegando.
    // this.cartService.cart$.subscribe(products => {
    //   console.log(products);
// aqui sabremos el tamaño de productos que hayan en el carro. 
      // this.total = products.length;
    // });
  //  }

  ngOnInit(): void {
  }

}
