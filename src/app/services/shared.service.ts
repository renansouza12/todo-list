import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private title = new BehaviorSubject<string>('');
  currentTitle = this.title.asObservable();

  private description = new BehaviorSubject<string>('');
  currentDescription =  this.description.asObservable();

  private doneSource = new Subject<void>();
  doneEvent = this.doneSource.asObservable();

  updateInformations(title: string,desc:string):void{
    this.title.next(title); 
    this.description.next(desc);
  }

  emitDoneEvent():void{
    this.doneSource.next();
  }

}
