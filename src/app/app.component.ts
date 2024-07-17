import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule , TodoAddComponent,TodoListComponent,TodoInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  displayMenu:boolean = false;

  menu():void{
    this.displayMenu = !this.displayMenu;
  }
  close():void{
    this.displayMenu = false;
  }
}
