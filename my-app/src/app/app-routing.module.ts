import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ContactanosComponent } from './contactanos/contactanos.component';
import { HomeComponent } from './home/home.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CrudComponent } from './crud/crud.component';
import { InventarioComponent } from './inventario/inventario.component';
import { CarritoComponent } from './carrito/carrito.component';

import {CustomPreloadStrategy} from './custom-preload';



const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'tienda', component: TiendaComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'crud', component: CrudComponent},
  { path: 'inventario', component: InventarioComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadStrategy
  })],
  providers: [
    CustomPreloadStrategy
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
