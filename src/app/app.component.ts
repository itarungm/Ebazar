import { Component, OnInit } from '@angular/core';
import { ProductNameService } from './appServices/product-name.service';
import { CartCountService } from './appServices/cart-count.service';
import { LoginCheckService } from './appServices/login-check.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EBazar';
  Count:boolean=false;
  signUser;signPass;loginsuc:boolean=false;loginfail=false;regsuc:boolean=false;
  regfail=false;
  router: any;
  account="Create Account";
  reg(email,pass){
    if(email!="" && pass!="")
    {this.signUser=email;
    this.signPass=pass;
    this.regsuc=true;
    this.regfail=false;
    this.account="Go to Login";
              }
    else
    {
      this.regfail=true;
      this.regsuc=false;
    }
  }
  login(email,pass){
    if(this.signUser==email && this.signPass==pass){
      this.loginsuc=true;
      let store=[{
        isLogin:true,
        userid:2
      }]
    localStorage.setItem("isLogin",JSON.stringify(store));

      this.loginfail=false;
      this.router1.navigate(['./products']);
    }else{
      this.loginfail=true;
      this.loginsuc=false;
    }
  }
 message:boolean=this.loginsuc;
  constructor(private data: ProductNameService,private data1:CartCountService,private data2:LoginCheckService,private router1: Router) { }
  ngOnInit(): void {
    let store=[{
      isLogin:false,
      userid:2
    }]
    localStorage.setItem("isLogin",JSON.stringify(store));
    this.data.shareCartCount.subscribe(x => this.Count = x);
    // localStorage.setItem("Count","true");
  }
  updatemessage(message){
    this.data2.updateData(message);
    console.log(message,"updatemessage");
  }


}
