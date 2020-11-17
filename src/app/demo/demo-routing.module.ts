import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './components/demo.component';

// Creando la constante para las rutas que sera de tipo "Routers" con un array vacio:
const routes: Routes = [
    {
    path: '',
    component: DemoComponent
    }

];

// Crear el decorador que tendra metadata que seran las rutas:
// Se pide que utilice "RoutersModule" con una ruta en espeficica para ellos se usa "forChild".
// El modulo tambien sera exportable para que se use en otros modulos.
@NgModule ({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

// Creando la clase:
export class DemoRoutingModule { }