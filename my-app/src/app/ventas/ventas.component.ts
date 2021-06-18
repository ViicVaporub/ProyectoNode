import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FirebaseServiceService } from '../services/firebase-service.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  config: any;
  collection = { count: 10, data: [] }
  NumeroJuegos =0;
  GananciaJuegos=0;
  NumeroConsola=0;
  GananciaConsola=0;
  NumeroFigura =0;
  GananciaFigura=0;
  NumeroManga =0;
  GananciaManga=0;
  visible:boolean;

  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder,
    private firebaseServiceService: FirebaseServiceService
  ) { }

  ngOnInit(): void {
    this.visible=true;

    this.firebaseServiceService.getCarrito().subscribe(resp => {
      this.collection.data = resp.map((e: any) => {
        return {
          codigo: e.payload.doc.data().codigo,
          nombre: e.payload.doc.data().nombre,
          tipo: e.payload.doc.data().tipo,
          departamento: e.payload.doc.data().departamento,
          proveedor: e.payload.doc.data().proveedor,
          valorcompra: e.payload.doc.data().valorcompra,
          stock: e.payload.doc.data().stock,
          valoractivo: e.payload.doc.data().valoractivo,
          idfirebase: e.payload.doc.id
        }
      })
    },
      error => {
        console.error(error);
      }
    );

    
    
  }

  Actualizar(){
    for(const item of this.collection.data){
      if(item.tipo=='Juego'){
        this.NumeroJuegos++;
      }
      if(item.tipo=='Juego'){
        this.GananciaJuegos+=item.valoractivo;
      }
      if(item.tipo=='Consola'){
        this.NumeroConsola++;
      }
      if(item.tipo=='Consola'){
        this.GananciaConsola+=item.valoractivo;
      }
      if(item.tipo=='Figura'){
        this.NumeroFigura++;
      }
      if(item.tipo=='Figura'){
        this.GananciaFigura+=item.valoractivo;
      }
      if(item.tipo=='Manga'){
        this.NumeroManga++;
      }
      if(item.tipo=='Manga'){
        this.GananciaManga+=item.valoractivo;
      }
    }
    this.visible=false;
  }
}
