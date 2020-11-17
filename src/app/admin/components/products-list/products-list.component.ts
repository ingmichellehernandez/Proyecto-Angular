import { Component, OnInit } from '@angular/core';

// importamos el servicio porque alli esta eliminar, editar y crear.
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  // indicamos una referencia que tendremos un array en vacio:
  products = [];

  // esto lo sacamos de angular material / table / ts
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];


  // hacemos una inyeccion de dependencia con ProductService:
  constructor(
    private productsService: ProductsService
  ) { }

  // para que una vez inicialice, ejecute la funsion.
  ngOnInit(): void {
    this.fetchProducts();
  }

// hacemos una ppetición, obtenemos todos los productos y nos suscribimos,
// luego esos productos de la api se los pasamos => al array de products y los tipamos.
  fetchProducts(): void {
    this.productsService.getAllProduct()
    .subscribe(products => {
      this.products = products;
    });
  }

  // recibimos el id como un string, luego le decimos a ProductService  que se quiere eliminar un producto, el id.
  // luego nos subscribimos para ver que se ejecute correctamente. obtenemos la respuesta (rta).
  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      // this.fetchProducts(); // esto para que cuando se le de a eliminar el producto la pagina lo muestre
      // console.log(rta);
      // if (rta) {
      //   const product = this.products.filter(cesar => cesar.id === id);
      //   const index =
      //   this.products.indexOf(product[0]);
      //   this.products.splice(index, 1);
      //   this.products = [...this.products];
      // }
        const product = this.products.find(element => element.id === id);
        console.log(rta);
        const indice = this.products.indexOf(product);
        console.log(indice);
        this.products.splice(indice, 1);
        // console.log(this.products);
        this.products = [...this.products];
    });
    }

}
