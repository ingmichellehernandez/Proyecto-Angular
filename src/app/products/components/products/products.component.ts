import { Component, OnInit } from '@angular/core';

// importamos las declaraciones de los tipos de objetos de "product.model.ts"
import { Product } from '../../../product.model';

import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

// Obligamos que "products" solo acepte array de tipo Product (product.model.ts)
  products: Product[] = [
    // {
    //   id: '1',
    //   title: 'Camiseta',
    //   image: 'assets/images/camiseta.png',
    //   price: 80000,
    //   description: 'bla bla bla bla.'
    // },
    // {
    //   id: '2',
    //   title: 'Hoodie',
    //   image: 'assets/images/hoodie.png',
    //   price: 80000,
    //   description: 'bla bla bla bla.'
    // },
    // {
    //   id: '3',
    //   title: 'Mug',
    //   image: 'assets/images/mug.png',
    //   price: 80000,
    //   description: 'bla bla bla bla.'
    // },
    // {
    //   id: '4',
    //   title: 'Pin',
    //   image: 'assets/images/pin.png',
    //   price: 80000,
    //   description: 'bla bla bla bla.'
    // },
    // {
    //   id: '5',
    //   title: 'Stickers1',
    //   image: 'assets/images/stickers1.png',
    //   price: 80000,
    //   description: 'bla bla bla bla.'
    // },
    // {
    //   id: '6',
    //   title: 'Stickers2',
    //   image: 'assets/images/stickers2.png',
    //   price: 80000,
    //   description: 'bla bla bla bla.'
    // }
  ];

  constructor(
    private productsService: ProductsService
  ) {}

// para inicializar, aqui se hace la peticion de los datos.
    ngOnInit() {
      this.fetchProducts();
    }

// clickProduct(id: number, title: string)
    clickProduct(id: number) {
      console.log('product');
      console.log(id);
    }
// este método va a traer todos los productos, por defecto trae un observable , por ende se debe suscribir para obtener la respuesta
    fetchProducts() {
      this.productsService.getAllProduct()
      .subscribe(products => {
        this.products = products;
        // console.log(products);
      });
    }
}
