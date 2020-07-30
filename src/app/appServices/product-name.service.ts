import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs' 
@Injectable({
  providedIn: 'root'
})
export class ProductNameService {
 private ProductName = new BehaviorSubject<string>("Null");
 private ProductBool = new BehaviorSubject<boolean>(true);
 private CartCount = new BehaviorSubject<boolean>(false);
 private ProductPrice = new BehaviorSubject<number>(0);



 public sharePName = this.ProductName.asObservable();
 public sharePNameBool = this.ProductBool.asObservable();
 public shareCartCount = this.CartCount.asObservable();
 public sharePrice = this.ProductPrice.asObservable();



  constructor() { }

  updateData(text){
    this.ProductName.next(text);
  }
  updateBool(bool){
    this.ProductBool.next(bool);
  }
  updateCount(bool){
    this.CartCount.next(bool);
  }
  updatePrice(num){
    this.ProductPrice.next(num);
  }

}
