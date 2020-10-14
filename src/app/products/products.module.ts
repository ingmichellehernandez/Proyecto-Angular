// Crearemos un nuevo modulo desde cero.
import { NgModule } from '@angular/core';
// Para que pueda usar las directivas ngFror, ngIf, etc..
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';




// Decorador como metadata
@NgModule ({
    declarations: [
        ProductComponent,
        ProductsComponent,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule,
        MaterialModule
    ]
})


export class ProductsModule { }
