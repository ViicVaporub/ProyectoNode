import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

import { FirebaseServiceService } from '../services/firebase-service.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  closeResult = '';
  productoForm:FormGroup;
  idFirebaseActualizar: string;
  actualizar:boolean;

  config:any;
  collection = { count:10, data:[] }

  constructor(
    private modalService: NgbModal,
    public fb:FormBuilder,
    private firebaseServiceService : FirebaseServiceService
  ) {}

  ngOnInit(): void {
    this.idFirebaseActualizar="";
    this.actualizar=false;

    this.config = {
      itemPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };

    this.productoForm = this.fb.group({
      id:['',Validators.required],
      nombre:['',Validators.required],
      costo:['',Validators.required]
    });

    this.firebaseServiceService.getProducto().subscribe(resp=>{
      this.collection.data = resp.map((e:any)=>{
        return{
          id:e.payload.doc.data().id,
          nombre:e.payload.doc.data().nombre,
          costo:e.payload.doc.data().costo,
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
    this.firebaseServiceService.deleteProducto(item.idfirebase);
  }

  guardarProducto():void{

    this.firebaseServiceService.createProducto(this.productoForm.value).then(resp=>{
      this.productoForm.reset();
      this.modalService.dismissAll();
    }).catch(error=>{
      console.error(error)
    })
  }

  actualizarProducto(){
    if(!isNullOrUndefined(this.idFirebaseActualizar)){
      this.firebaseServiceService.updateProducto(this.idFirebaseActualizar,this.productoForm.value).then(resp=>{
        this.productoForm.reset();
        this.modalService.dismissAll();
      }).catch(error=>{
        console.error(error);
      });
    }
  }

  openEditar(content, item:any) {
    this.productoForm.setValue({
      id:item.id,
      nombre: item.nombre,
      costo:item.costo
    });
    this.idFirebaseActualizar = item.idfirebase;
    this.actualizar = true;

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(content) {
    this.actualizar = false;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
