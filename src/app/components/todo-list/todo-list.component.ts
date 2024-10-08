import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { Information } from '../models/information.model';
import { SharedService } from '../../services/shared.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [DatePipe, TodoCardComponent,DragDropModule],
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
    const savedItems = localStorage.getItem('informations');
    if (savedItems) {
      this.informations = JSON.parse(savedItems);
    }

    this.service.currentTitle.subscribe(title => this.title = title);
    this.service.currentDescription.subscribe(desc => this.description = desc);
    this.service.doneEvent.subscribe(() => { 
      this.addInformation(this.title, this.description); 
    });
  }

  addInformation(title: string, description: string) {
    if (title && description) {
      const newItem = { title, description };
      this.informations.push(newItem);

      localStorage.setItem("informations",JSON.stringify(this.informations));
    }
  }

  drop(event: CdkDragDrop<Information[]>) {
    moveItemInArray(this.informations, event.previousIndex, event.currentIndex);
    localStorage.setItem("informations", JSON.stringify(this.informations)); 
  }

  deleteCard(index:number):void{
    console.log("delete clicked ");
    this.informations.splice(index,1);
    localStorage.setItem("informations", JSON.stringify(this.informations));    
  }
}


