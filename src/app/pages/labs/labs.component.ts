import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {signal} from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  name = signal('maycol');
  age : number = 26;
  Bienvenido : string = "Hola bienvenidos";
  items  = [
    'instalar','crear proyectos','crear componentes'
  ]
  lista = [
    'Instalar angular',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicios'
  ]
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png'
  person = {
    name : 'Maycol',
    age : 18,
    avatar : 'https://w3schools.com/howto/img_avatar.png'
  }
  clickHandler () {
    alert('Hola');
  }

  inputHandler(event : Event){
    console.log(event)
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
