import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { Information } from '../models/information.model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [DatePipe, TodoCardComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  today: number = Date.now();
  id!: number;
  title!: string;
  description!: string;


  informations: Information[] = [];

  private service = inject(SharedService);
  
  ngOnInit(): void {
    this.service.currentTitle.subscribe(title => this.title = title);
    this.service.currentDescription.subscribe(desc => this.description = desc);
    this.service.doneEvent.subscribe(() => { this.addInformation(this.title, this.description) });
  }

  addInformation(title: string, description: string) {
    if (title && description) {
      const newItem = { title, description };
      this.informations.push(newItem);
      console.log(this.informations);
    }
  }
}


