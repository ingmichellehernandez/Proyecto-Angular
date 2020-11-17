import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';

// Comenzaremos a importar los componentes a utilizar, una vez ya creados.

import { ContactComponent } from './contact/contact.component';
// import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
// import { ProductsComponent } from './products/components/products/products.component';

import { AdminGuard } from './admin.guard';


// crearemos un array que tendra objetos con atributo "path" donde estara la ruta de la pag y enlazar el componente.
// Cada uno de los "path" es la ruta que se mostrara en el navegador.
const routes: Routes = [
  {
// esto indica que si se coloca la url en seco hara un redirecionamiento a home.
// Este "componet" se aplicara a todos sus hijos.
    path: '',
    component: LayoutComponent,
    children: [
      {
// si aquí no se coloca el "home" la pagina la muestra automáticamente y es mejor.
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {

        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
        // component: ProductsComponent
      },
      {
        path: 'contact',
        // canActivate: [AdminGuard],
        component: ContactComponent
      },
//       {
// va a renderizar este componente dependiendo del "id" que esta recibiendo, ya que le enviamos un parametro.
//         path: 'products/:id',
//         component: ProductDetailComponent
//       },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
        // component: DemoComponent
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
        // component: DemoComponent
      }
    ]
  },
      {
// "loadChildren" carga un modulo dinamicamente y se usara una funsion array, aqui se esta usando lazy loading.
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: '**', // Esto indica cuando no haya ruta, no hubo match.
        component: PageNotFoundComponent
      }
];

// "PreloadAllModules" es una estrategia de recarga de las paginas.
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
