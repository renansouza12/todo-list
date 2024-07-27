import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private title = new BehaviorSubject<string>("");
  private description = new BehaviorSubject<string>("");
  currentTitle = this.title.asObservable();
  currentDescription = this.description.asObservable();

  updateTitle(title:string,description:string):void{
    this.title.next(title);
    this.description.next(description);
  }

}
