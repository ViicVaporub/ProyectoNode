import { stringify } from '@angular/compiler/src/util';
import { Component} from '@angular/core';
import { AccesibilidadService } from '../service/accesibilidad.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  accesibilidad:AccesibilidadService
  constructor(lector:AccesibilidadService){
    this.accesibilidad = lector;
    if('speechSynthesis' in window){}
    else{
      alert("Lo siento, tu navegador no soporta esta tecnologia");
    }
  }

  hablar(faq1:string,faq2:string,faq3:string,
    faq4:string,faq5:string,faq6:string,
    faq7:string,faq8:string,faq9:string,
    faq10:string,faq11:string,faq12:string
    ){
      let textoA= "Preguntas y respuestas" + ".......  " +
      document.getElementById(faq1).innerHTML + 
      document.getElementById(faq2).innerHTML + ".......  " +
      document.getElementById(faq3).innerHTML + 
      document.getElementById(faq4).innerHTML + ".......  " +
      document.getElementById(faq5).innerHTML + 
      document.getElementById(faq6).innerHTML + ".......  " +
      document.getElementById(faq7).innerHTML + 
      document.getElementById(faq8).innerHTML + ".......  " +
      document.getElementById(faq9).innerHTML + 
      document.getElementById(faq10).innerHTML + "........  " +
      document.getElementById(faq11).innerHTML + 
      document.getElementById(faq12).innerHTML;
      let mensaje = new SpeechSynthesisUtterance();
      mensaje.text = textoA;
      speechSynthesis.cancel();
      speechSynthesis.speak(mensaje);
  }
  pausa(){
    speechSynthesis.pause();
  }
    



}
