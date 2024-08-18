import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent implements OnInit {

  @Input() title!: string;
  @Input() description!: string;

  isChecked: boolean = false;

  ngOnInit(): void {
    const savedState = localStorage.getItem(this.title + '_checked');
    if (savedState !== null) {
      this.isChecked = JSON.parse(savedState);
    }
  }


  toggleChecked(): void {
    this.isChecked = !this.isChecked;
    localStorage.setItem(this.title + '_checked', JSON.stringify(this.isChecked));

  }
}
