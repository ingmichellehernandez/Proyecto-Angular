// Crearemos un nuevo modulo desde cero.
import { NgModule } from '@angular/core';
// Para que pueda usar las directivas ngFror, ngIf, etc..
import { CommonModule } from '@angular/common';

import { DemoComponent } from './components/demo.component';
// import {  } from '../shared/pipes/exponential/exponential.pipe';
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';





// Decorador como metadata
@NgModule ({
    declarations: [
        DemoComponent
    ],
    imports: [
        CommonModule,
        DemoRoutingModule,
        SharedModule,
        MaterialModule
    ]
})


export class DemoModule { }
