import { Component } from '@angular/core';
import { AccesibilidadService } from '../service/accesibilidad.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  accesibilidad : AccesibilidadService
  constructor(lector:AccesibilidadService){
    this.accesibilidad = lector;
    if('speechSynthesis' in window){}
    else{
      alert("Lo siento, tu navegador no soporta esta tecnologia");
    }
  }

  hablar(home:string,home1:string,home2:string,home3:string,home4:string,home5:string,home6:string,home7:string,home8:string,home9:string,home10:string,home11:string,
    home12:string,home13:string,home14:string){
      let textoA= "Kamui Store" + ".......  " +
      document.getElementById(home).innerHTML + 
      document.getElementById(home1).innerHTML + ".......  " +
      document.getElementById(home2).innerHTML + "........  " +
      document.getElementById(home3).innerHTML + ".......  " +
      document.getElementById(home4).innerHTML + "........  " +
      document.getElementById(home5).innerHTML + ".......  " +
      document.getElementById(home6).innerHTML + "........  " +
      document.getElementById(home7).innerHTML + ".......  " +
      document.getElementById(home8).innerHTML + "........  " +
      document.getElementById(home9).innerHTML + "........  " +
      document.getElementById(home10).innerHTML + "........  " +
      document.getElementById(home11).innerHTML + "........  " +
      document.getElementById(home12).innerHTML + "........  " +
      document.getElementById(home13).innerHTML + "........  " +
      document.getElementById(home14).innerHTML;
      let mensaje = new SpeechSynthesisUtterance();
      mensaje.text = textoA;
      speechSynthesis.cancel();
      speechSynthesis.speak(mensaje);
  }
  pausa(){
    speechSynthesis.pause();
  }
  
}
