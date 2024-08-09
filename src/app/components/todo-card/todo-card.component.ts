import { Component, Input,Output,EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {

@Input() title!:string;
@Input() description!:string;
@Input() check!:string;

  checked():void{
    this.check = "isChecked";
  }
}
