import { Injectable } from '@angular/core';
import { from } from 'rxjs';

// vamos a importar la interfaz que contiene nuentro modelo de datos.
import { Product } from '../../product.model';
// importamos la libreria "rxjs" que añade principios reactivos a nuentra app con el metodo "BehaviorSubjet" para hacer esta tarea.
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

// creamos un array donde iremos obteniendo los productos.
// lo colocamos privado para que no todo tengan acceso a el sino al flujo de datos que se obtendra.
  private products: Product[] = [];
// se crea una variable privada "cart" que sera una instancia de "BehaviorSubject" donde esto sera de tipo "Product[]".
// lo que queremos tener como control de flujo de datos sea en ese array de productos que inicia en un array en vacio.
  private cart = new BehaviorSubject<Product[]>([]);

// creamos una variable publica que pueda ser preguntada por cualquier componente y que sea de tipo "observable"
// ais al subscribirse podran notar los cambios en tiempo real.
cart$ = this.cart.asObservable();

  constructor() { }

// recibimos la variable y cada vez que se agrege al carrito creara una nueva referencia del arreglo.
// coloca todos los productos y agrega este ultimo "product"
  addCart(product: Product) {
    this.products = [...this.products, product];
// aqui se notifica a todos los componentes que esten subscritos que hubo un cambio, que algo se agrego al carrito.
// eso se logra con "next" y se envia la copia del array actual.
    this.cart.next(this.products);
  }
}
