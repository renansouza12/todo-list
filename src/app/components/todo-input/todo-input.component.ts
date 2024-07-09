import { Component, Input } from '@angular/core';
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
  desc!:string;
  titleStep:boolean = true;
  descStep!:boolean;
  @Input() displayMenu:boolean = false;

  next():void{
    console.log("clicked", this.title);
    this.titleStep = false;
    this.descStep = true;
  }
  previous():void{
    this.titleStep = true;
    this.descStep = false;
  }
  done():void{
    console.log(this.desc);
  }
  close():void{
    this.displayMenu = false;
  }
}
