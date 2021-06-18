import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FirebaseServiceService } from '../services/firebase-service.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  closeResult = '';
  InventarioForm: FormGroup;
  idFirebaseActualizar: string;
  actualizar: boolean;

  config: any;
  collection = { count: 10, data: [] }

  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder,
    private firebaseServiceService: FirebaseServiceService
  ) { }

  ngOnInit(): void {

    this.idFirebaseActualizar = "";
    this.actualizar = false;

    this.InventarioForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      departamento: ['', Validators.required],
      proveedor: ['', Validators.required],
      valorcompra: ['', Validators.required],
      stock: ['', Validators.required],
      valoractivo: ['', Validators.required]
    });

    this.firebaseServiceService.getArticulo().subscribe(resp => {
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

  eliminar(item: any): void {
    this.firebaseServiceService.deleteArticulo(item.idfirebase);
  }

  guardarArticulo(): void {

    this.firebaseServiceService.createArticulo(this.InventarioForm.value).then(resp => {
      this.InventarioForm.reset();
      this.modalService.dismissAll();
    }).catch(error => {
      console.error(error)
    })
  }

  actualizarArticulo() {
    if (!isNullOrUndefined(this.idFirebaseActualizar)) {
      this.firebaseServiceService.updateArticulo(this.idFirebaseActualizar, this.InventarioForm.value).then(resp => {
        this.InventarioForm.reset();
        this.modalService.dismissAll();
      }).catch(error => {
        console.error(error);
      });
    }
  }

  openEditar(content, item: any) {
    this.InventarioForm.setValue({
      codigo: item.codigo,
      nombre: item.nombre,
      tipo: item.tipo,
      departamento: item.departamento,
      proveedor: item.proveedor,
      valorcompra: item.valorcompra,
      stock: item.stock,
      valoractivo: item.valoractivo
    });
    this.idFirebaseActualizar = item.idfirebase;
    this.actualizar = true;

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(content) {
    this.actualizar = false;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
