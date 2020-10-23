import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  Mensaje = "";
  erDNI = "^[0-9]{8}[A-Za-z]$";
  MostrarInfo = "";
  MostrarInfo2 = "";

  EnviarDatos(Mensaje,nombre,DNI){
    if(nombre.value == ""){
      alert("El nombre esta vacio")
    }
    if(DNI.match(this.erDNI)){
      this.MostrarInfo="Correcto"
    }
    else{
      this.MostrarInfo="Incorrecto"
    }
    if(Mensaje.length<2){
      this.MostrarInfo2="El mensaje tiene menos de dos caracteres"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
