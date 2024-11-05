import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode = false;
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate = '';
  config: { [key: string]: string } | null  = null;
  
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2024-10-28',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2024-10-29',
      done: true,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2024-10-30',
      done: false,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date().toDateString(),
      };
    }, 500);
  }

  clearTasks(){
    this.tasks = []
  }

  createTask(){
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
  }

  switchEditMode(){
    this.editMode = !this.editMode;
  }
}

