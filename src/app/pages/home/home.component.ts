import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  lista = signal<Task[]>( [
    {
      id: Date.now(),
      title: "Crear Proyecto",
      completed: false
    },
    {
      id: Date.now(),
      title: "Crear Componentes",
      completed: true
    },

  ])

  changeHandler(event:  Event){
    const input = event.target as HTMLInputElement;
    const newTarea = input.value;
    //Usamos la funcion que nos ayuda a agregar las tareas
    this.addTask(newTarea);
    //Si queremos recetear el imput solo agregar la siguiente instrucicon
    input.value = "";
  }

  addTask(title:string){
    const newTarea = {
      id: Date.now(),
      title,
      completed:false
    };
    //usaremos el metodo update , el cual nos dara el valor previo y debemos modificar el valor mediante un arrowfunction
    this.lista.update((lista) => [...lista, newTarea]);
  }

  deleteTareas(index: number){
    this.lista.update((lista) => lista.filter((tarea, position) => position !== index));
  }
}
