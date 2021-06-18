import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

import { FirebaseServiceService } from '../services/firebase-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  config:any;
  collection = { count:10, data:[] }

  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder,
    private firebaseServiceService: FirebaseServiceService
  ) { }

  ngOnInit(): void {
    for(var i=0;i<this.collection.count;i++){
      this.collection.data.push({
        nombre: "nombre"+1,
      tipo: "tipo"+1,
      proveedor: "proveedor"+1,
      valoractivo: "v"+1
      })
    }
  }
  eliminar(item:any):void{
    this.collection.data.pop();
  }

}
