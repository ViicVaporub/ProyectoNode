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
import { environment } from './../environments/environment';


import { CrudComponent } from './crud/crud.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactanosComponent,
    FaqComponent,
    TiendaComponent,
    FooterComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    DataDbService

    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
