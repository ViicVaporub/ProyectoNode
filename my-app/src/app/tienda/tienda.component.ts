import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

import { FirebaseServiceService } from '../services/firebase-service.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  collection = { count:0, data:[] }
  collectioncarrito : any;
  videjuego:boolean;

  constructor(
    private modalService: NgbModal,
    public fb:FormBuilder,
    private firebaseServiceService : FirebaseServiceService
  ) { }

  ngOnInit(): void {
    
    this.firebaseServiceService.getArticulo().subscribe(resp=>{
      this.collection.data = resp.map((e:any)=>{
        return{
          codigo:e.payload.doc.data().codigo,
          nombre:e.payload.doc.data().nombre,
          tipo:e.payload.doc.data().tipo,
          departamento:e.payload.doc.data().departamento,
          proveedor:e.payload.doc.data().proveedor,
          valorcompra:e.payload.doc.data().valorcompra,
          stock:e.payload.doc.data().stock,
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

  save(item:any):void{
    this.firebaseServiceService.createCarrito(item).then(resp => {
      alert ("Se ha añadido al carrito correctamente");  
    }).catch(error => {
      console.error(error)
    })
  }

}
