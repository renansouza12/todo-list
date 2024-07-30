import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { Information } from '../models/information.model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [DatePipe,TodoCardComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  today:number = Date.now();
  title: string = '';

  informations: Information[] = [
    {
      id: 1,
      title: "title here",
      description: 'opa'
    }
  ];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.service.currentTitle.subscribe(title => {
      this.title = title;
      this.performActionWithTitle(); 

    });
  }

  performActionWithTitle(): void {
    this.informations[0].title = this.title;
    console.log('Performing action with title:', this.title);
  }
}


