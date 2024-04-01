import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  lista = signal( [
    'Instalar angular',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicios'
  ])

  changeHandler(event:  Event){
    const input = event.target as HTMLInputElement;
    const newTarea = input.value;
    //usaremos el metodo update , el cual nos dara el valor previo y debemos modificar el valor mediante un arrowfunction
    this.lista.update((lista) => [...lista, newTarea]);
    //Si queremos recetear el imput solo agregar la siguiente instrucicon
    input.value = "";
  }

  deleteTareas(index: number){
    this.lista.update((lista) => lista.filter((tarea, position) => position !== index));
  }
}
