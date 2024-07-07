import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss'
})
export class TodoInputComponent {

  title:string = "title";
  titleStep:boolean = true;
  descStep:boolean = false;

  next():void{
    console.log("clicked", this.title);
    this.titleStep = false;
    this.descStep = true;
  }
  previous():void{
    this.titleStep = true;
    this.descStep = false;
  }

}
