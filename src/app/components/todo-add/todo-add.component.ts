import { NgOptimizedImage } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent{
  btnClass:string = "unactive";

  addTask():void{
   this.btnClass = "active"; 
   this.btnTextAnimation();
  }

  private btnTextAnimation():void{
  
    console.log("clicked");
    
  }
}
