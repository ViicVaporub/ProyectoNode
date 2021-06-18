import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { FaqComponent } from './faq/faq.component';
import { TiendaComponent } from './tienda/tienda.component';
import { FooterComponent } from './footer/footer.component';

import { DataDbService } from './service/data-db.service';


import { CrudComponent } from './crud/crud.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { InventarioComponent } from './inventario/inventario.component';
import { CarritoComponent } from './carrito/carrito.component';
import { VentasComponent } from './ventas/ventas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    ContactanosComponent,
    TiendaComponent,
    FooterComponent,
    CrudComponent,
    InventarioComponent,
    CarritoComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [
    DataDbService,
    NgbModule,
    ReactiveFormsModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
