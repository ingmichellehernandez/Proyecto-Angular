import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products: Product[] = [
  //   {
  //     id: '1',
  //     title: 'Camiseta',
  //     image: 'assets/images/camiseta.png',
  //     price: 80000,
  //     description: 'bla bla bla bla.'
  //   },
  //   {
  //     id: '2',
  //     title: 'Hoodie',
  //     image: 'assets/images/hoodie.png',
  //     price: 80000,
  //     description: 'bla bla bla bla.'
  //   },
  //   {
  //     id: '3',
  //     title: 'Mug',
  //     image: 'assets/images/mug.png',
  //     price: 80000,
  //     description: 'bla bla bla bla.'
  //   },
  //   {
  //     id: '4',
  //     title: 'Pin',
  //     image: 'assets/images/pin.png',
  //     price: 80000,
  //     description: 'bla bla bla bla.'
  //   },
  //   {
  //     id: '5',
  //     title: 'Stickers1',
  //     image: 'assets/images/stickers1.png',
  //     price: 80000,
  //     description: 'bla bla bla bla.'
  //   },
  //   {
  //     id: '6',
  //     title: 'Stickers2',
  //     image: 'assets/images/stickers2.png',
  //     price: 80000,
  //     description: 'bla bla bla bla.'
  //   }
  // ];

  // inyectaremos una dependencia llamada http:
  constructor(
    private http: HttpClient
  ) { }

// Se crea el método siguiente para que devuelva todos los productos, get solicita info.
// un mayor y menor que le indica a angular que debe resolver un array de tipo product, asi no sera un objeto.
  getAllProduct() {
    return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products/');
  }

// Se crea otro método que recibira el "id" del producto que se quiere buscar, que sera de tipo "string".
// Obtendra un "id" de tipo "string" y le pide que encuentre (find) en products un item donde el "id" coincida con un "item.id" y retornalo.
  getProduct(id: string) {
    // return this.products.find(item => id === item.id);
    return this.http.get(`https://platzi-store.herokuapp.com/products/${id}`);
  }
}
