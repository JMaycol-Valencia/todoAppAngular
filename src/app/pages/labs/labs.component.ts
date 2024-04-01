import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {signal} from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DividerComponent } from '../../components/divider/divider.component';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, NavbarComponent,DividerComponent],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  //CREAREMOS NUESTRO PRIMER SIGNAL , LO HAREMOS LLAMANDO AL METODO SIGNAL
  //para LLAMARLO SIEMPRE DEBEMOS EJECUTARLO
  name = signal('maycol');
  age : number = 26;
  Bienvenido : string = "Hola bienvenidos";
  items  = [
    'instalar','crear proyectos','crear componentes'
  ]
  lista = signal( [
    'Instalar angular',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicios'
  ])
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

  //opcion para modificar el valor
  inputHandler(event : Event){
    const input = event.target as HTMLInputElement;
    const newValor = input.value;
    this.name.set(newValor);
  }

  changeHandler(event:  Event){
    const input = event.target as HTMLInputElement;
    const newVal = input.value;
    //para cambiar un valor con signals lo mejor es hacerlo de la siguiente manera
    this.name.set(newVal);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
