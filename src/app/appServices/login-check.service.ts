import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class LoginCheckService {
private content = new BehaviorSubject<boolean>(false);
public share = this.content.asObservable();
  constructor() { }
updateData(bool:boolean){
  this.content.next(bool);
}
}
