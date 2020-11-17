// Decorador: indicando que esto sera un componente.
import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
 } from '@angular/core';
// Este componente va a recibir y enviar dato.

import { Product } from '../../../product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
    selector: 'app-product', // este selector sera mi referencia.
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

// para que cualquier elemento en angular pueda usar esta clase, se coloca "export"
export class ProductComponent implements OnInit, OnDestroy {
    @Input() product: Product;
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    today = new Date(); // automaticamente toma la fecha y hora actual
    // nuetrso evento sera "clicked", interfaz "EventEmitter"de tipo "any" (cualquier valor).
    // "new EventEmitter() es para inicializar pero sin valor."

    // product: Product = {
    //       id: '1',
    //       title: 'Camiseta',
    //       image: 'assets/images/camiseta.png',
    //       price: 80000,
    //       description: 'bla bla bla bla.'
    //     };

    constructor(
        private cartService: CartService

    ){
        console.log('1. constructor');
    }
    // ngOnChanges(changes: SimpleChanges){
    //     console.log('2. ngOnChanges');
    //     console.log(changes);
    // }
    ngOnInit(): void {
        console.log('3. ngOnInt');
    }
    // ngDoCheck(){
    //     console.log('4. ngDoCheck');
    // }
    ngOnDestroy(): void {
        console.log('5. ngOnDestroy');
    }

    addCart(): void {
        console.log('Se añadio al carrito');
        this.cartService.addCart(this.product);
        // this.clicked.emit(this.product.id);
    } // cuando se le de al boton, en consola se mostrara ese mensaje y el id del producto.
}

