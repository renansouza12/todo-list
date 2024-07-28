import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private title = new BehaviorSubject<string>('');
  currentTitle = this.title.asObservable();

  updateTitle(title: string):void{
    this.title.next(title); 
  }

}
