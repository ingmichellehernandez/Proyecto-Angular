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
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
    const id = params.id;
    this.fetchProduct(id);
    // this.product = this.productsService.getProduct(id);
    // console.log(product);
    });
  }
// como el get nos devuelve una observable, se suscribe para que cambie y sea la data
  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      // console.log(product);
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '19',
      title: 'banner19',
      image: 'assets/images/banner-3.jpg',
      price: 6000,
      description: 'creado desde angular'
    };

    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
      // this.product = product;
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 5555555,
      description: 'producto modificado'
    };

    this.productsService.updateProduct('2', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('20')
    .subscribe(rta => {
      console.log(rta);
    });
  }
}