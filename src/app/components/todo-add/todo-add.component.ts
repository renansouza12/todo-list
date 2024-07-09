import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent{

 @Output() btnMenu = new EventEmitter<string>();

  addTask():void{
    this.btnMenu.emit();
  }
}
