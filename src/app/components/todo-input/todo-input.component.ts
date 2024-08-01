import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss'
})
export class TodoInputComponent {
  @Input() title:string = "title";
  desc!:string;
  titleStep:boolean = true;
  descStep!:boolean;
  anim!:string;
  animDesc!:string;

  @Input() displayMenu:boolean = false;
  @Output() eventClose = new EventEmitter<string>();
  @Output() btnDone = new EventEmitter<string>();

  constructor(private service:SharedService){}

  next():void{
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
    this.descStep = false;
    this.titleStep = true;
    this.anim = "appear";
  }
  done():void{
    this.service.updateInformations(this.title,this.desc);
    this.service.emitDoneEvent();
    this.btnDone.emit();
  }
  close():void{
    this.eventClose.emit();
  }

}
