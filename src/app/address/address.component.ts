import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
route:Router;
  pay(){
    this.router.navigate(['./payment']);
}
  constructor(private router: Router) { }
productname;price;
  ngOnInit(): void {
   this.productname = localStorage.getItem("Product");
   this.price = localStorage.getItem("Price");
  }

}
