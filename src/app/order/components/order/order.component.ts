import { Component, OnInit } from '@angular/core';

import { from, Observable } from 'rxjs';

import { Product } from 'src/app/product.model';
import { CartService } from '../../../core/services/cart.service';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderProducts$: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
// en "orderProducts" dentriamos la escucha continua de las cosas que se agreguen al carrito.
      this.orderProducts$ = this.cartService.cart$;
    }

  ngOnInit(): void {
  }





}
