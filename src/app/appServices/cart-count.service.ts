import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs' 


@Injectable({
  providedIn: 'root'
})
export class CartCountService {
  private CartCountFalse = new BehaviorSubject<boolean>(true);
  public shareCartC = this.CartCountFalse.asObservable();

  updateCount(bool){
    this.CartCountFalse.next(bool);
  }

  constructor() { }
}
