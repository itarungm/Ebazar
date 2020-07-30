import { Component, OnInit } from '@angular/core';
import { ProductNameService } from '../appServices/product-name.service';
import { CartCountService } from '../appServices/cart-count.service';
import { LoginCheckService } from '../appServices/login-check.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // router: any;
  Product;
checkProduct:boolean;
price;
checkCount;
message:boolean;
  constructor(private data: ProductNameService,private data1:CartCountService,private data2:LoginCheckService,private router: Router) {}
  ngOnInit(): void {
    this.data.sharePName.subscribe(x => this.Product = x);
    this.data.sharePNameBool.subscribe(y=>this.checkProduct = y);
    this.data.sharePrice.subscribe(a=>this.price=a);
    this.data2.share.subscribe(m => this.message = m);
    localStorage.setItem("Product",this.Product);
    localStorage.setItem("Price",this.price);


    // this.data1.shareCartC.subscribe(m=>this.checkCount)

  }
removeProduct(){
  this.Product=null;
  this.price=null;
  this.checkProduct=true;
  this.checkCount=true;
}

CheckLogin(){
  let store=JSON.parse(localStorage.getItem("isLogin"));
  console.log(localStorage.getItem("isLogin"),"Localstorage Cart");

  if(store[0].isLogin){
    this.router.navigate(['./address']);
  this.data.updateCount(false);
  }else{
    alert("Please Login to Place Order, Thank You!");
  }
}
updateCart(){
  this.data.updateCount(false);

}
}
