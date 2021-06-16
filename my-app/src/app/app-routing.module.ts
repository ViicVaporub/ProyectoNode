import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactanosComponent } from './contactanos/contactanos.component';
import { HomeComponent } from './home/home.component';
import { TiendaComponent } from './tienda/tienda.component';
import { FaqComponent } from './faq/faq.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'tienda', component: TiendaComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'crud', component: CrudComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
