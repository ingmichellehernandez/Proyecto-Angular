// Crearemos un nuevo modulo desde cero.
import { NgModule } from '@angular/core';
// Para que pueda usar las directivas ngFror, ngIf, etc..
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';




// Decorador como metadata
@NgModule ({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})


export class HomeModule { }

