import { Component, OnInit } from '@angular/core';

// se importara dos instancias, el primero sera inyeccion de dependencia y el otro de tipado.
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

// Crearemos una variable publica para rendirizar el detalle del producto.
  product: Product;

// Aquí se inserta la inyecccion de dependencia:
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

// Le pedimos a "this.route" que nos de los parametros que estan en la ruta y luego nos suscribimos.
// Al suscribise lo que decimos es que a medida que nos movemos de pag o de id este genere el cambio (nos suscribimos la cambio).
// Recibimos los parametros que tenga la ruta y lo tipamos de tipo "Params" y luego se ejecuta la funsion imprimir.
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    const id = params.id;
    this.product = this.productsService.getProduct(id);
    // console.log(product);
    });
  }

}
