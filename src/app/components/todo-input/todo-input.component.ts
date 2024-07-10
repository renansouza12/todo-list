import { Component, Input, OnInit } from '@angular/core';
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
  anim!:string;
  animDesc!:string;


  next():void{
    console.log("clicked", this.title);
   
    this.anim = "item";

    setTimeout(() => {
      this.titleStep = false;
      this.descStep = true;
      this.anim = "";
      this.animDesc = "desc";
    }, 1000);

  }
  previous():void{
    this.anim = "item";
      setTimeout(() => {
         this.descStep = false;
         this.titleStep = true;
         this.anim = "appear";
      }, 2000);
  }
  done():void{
    console.log(this.desc);
  }
  close():void{
    this.displayMenu = false;
  }
}
