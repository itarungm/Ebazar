import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  pname;price;
  ngOnInit(): void {
    this.pname=localStorage.getItem("Product");
    this.price=localStorage.getItem("Price");

  }

}
