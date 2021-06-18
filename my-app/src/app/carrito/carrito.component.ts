import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

import { FirebaseServiceService } from '../services/firebase-service.service';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  config:any;
  collection = { count:10, data:[] }
  collectioncarrito = { count:0, data:[]}

  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder,
    private firebaseServiceService: FirebaseServiceService
  ) { }

  ngOnInit(): void {
    this.firebaseServiceService.getCarrito().subscribe(resp=>{
      this.collection.data = resp.map((e:any)=>{
        return{
          codigo:e.payload.doc.data().codigo,
          nombre:e.payload.doc.data().nombre,
          tipo:e.payload.doc.data().tipo,
          departamento:e.payload.doc.data().departamento,
          proveedor:e.payload.doc.data().proveedor,
          valorcompra:e.payload.doc.data().valorcompra,
          stock:e.payload.doc.data().stock,
          cantidad: 1,
          valoractivo:e.payload.doc.data().valoractivo,
          idfirebase: e.payload.doc.id
        }
      })
    },
    error=>{
      console.error(error);
    }
    );
  }

  eliminar(item:any):void{
    this.firebaseServiceService.deleteCarrito(item.idfirebase);
  }

  realizar():void{
    for(const item of this.collection.data){
      this.firebaseServiceService.deleteCarrito(item.idfirebase);
    }
  }
}
