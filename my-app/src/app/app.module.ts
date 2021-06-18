import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MsgComponent } from './msg/msg.component';
import { WindowService } from './window.service';
const config = {
  apiKey: "AIzaSyClbqv2m5xR3MTDFqBxACVRgNCQXNl8A1Q",
  authDomain: "inventario-7fb44.firebaseapp.com",
  databaseURL: "https://inventario-7fb44-default-rtdb.firebaseio.com/",
   projectId: "inventario-7fb44",
  storageBucket: "inventario-7fb44.appspot.com",
  messagingSenderId: "1024041023458",
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MsgComponent,
    ContactanosComponent,
    TiendaComponent,
    FooterComponent,
    CrudComponent,
    InventarioComponent,
    CarritoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    
  ],
  providers: [
    DataDbService,
    NgbModule,
    ReactiveFormsModule,
    WindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
