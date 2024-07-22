import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TodoCardComponent } from '../todo-card/todo-card.component';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [DatePipe,TodoCardComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  today:number = Date.now();
}
