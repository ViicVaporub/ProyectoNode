import { Component, OnInit } from '@angular/core';
import { AccesibilidadService } from '../service/accesibilidad.service';



@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  accesibilidad:AccesibilidadService;
  constructor(lector:AccesibilidadService){
    this.accesibilidad = lector;
    if('speechSynthesis' in window){}
    else{
      alert("Lo siento, tu navegador no soporta esta tecnologia");
    }
  }
  ngOnInit(): void {
  }

  hablar(contact:string,contact1:string,contact2:string,contact3:string,contact4:string,contact5:string){
    let textoAEscuchar =
    document.getElementById(contact).innerHTML + "......  " + 
    document.getElementById(contact1).innerHTML + ".......  " + "Datos solicitados" + "....... " + 
    document.getElementById(contact2).innerHTML + "....... " + 
    document.getElementById(contact3).innerHTML + ".......  " + 
    document.getElementById(contact4).innerHTML + ".......  " + 
    document.getElementById(contact5).innerHTML;
    let mensaje = new SpeechSynthesisUtterance();
    mensaje.text = textoAEscuchar;
    speechSynthesis.cancel();
    speechSynthesis.speak(mensaje);
  }
  pausa(){
    speechSynthesis.pause();
  }


}
