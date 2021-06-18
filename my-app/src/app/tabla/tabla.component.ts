import { Component, OnInit } from '@angular/core';
import { TablaService } from '../tabla.service';
import { Listaproductos } from './listaproductos.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  productos: Listaproductos[];

  constructor(private tabla: TablaService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    const urapi= `http://localhost:3000/fetch_tabla`;
    this.tabla.getJSON(urapi).subscribe((response:any)=>{
      console.log(response)
      this.productos=response;

      console.log('prueba', this.productos);
      
    });
  }

}
