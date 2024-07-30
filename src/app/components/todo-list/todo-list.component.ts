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
  title!:string;

  constructor(private service:SharedService){
    this.service.currentTitle.subscribe(title => {this.title = title});
    console.log("titel: " + this.title);
  }
  
  informations:Information[] =[
    {
      id:1,
      title:this.title,
      description:'opa'
    },
    {
      id:2,
      title:'Doisieme',
      description:'description'
    }
  ];

}
