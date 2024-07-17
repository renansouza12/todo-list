import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-input-add',
  standalone: true,
  imports: [FormsModule,  CommonModule],
  templateUrl: './input-add.component.html',
  styleUrl: './input-add.component.scss'
})
export class InputAddComponent {
  title:string = "";
  
  next(){
    console.log(this.title);
  }
}
