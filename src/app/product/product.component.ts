import { Component, OnInit, Input } from '@angular/core';
import { ProductNameService } from '../appServices/product-name.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  rup="₹";
  namesearch:string='';
productArr1=[
  { name:"Laptop",
    price:30000,
    image: '../../assets/images/products/laptop.jpg',
    desc:"Your laptop, your way Work and play your way virtually anywhere. With laptop-to-tablet versatility."
  },
  { name:"Refrigerator",
     price:22000,
    image: '../../assets/images/products/refrigerator.png',
    desc:"Direct Cool Refrigerators Energy efficient and compact, direct cool refrigerators."
  },
  { name:"Washing Machine",
    price:20000,
    image: '../../assets/images/products/washing.jpg',
    desc:"Top-loading washing machines are easy on your back, as they don’t require you to bend on your knees."
  },
  { name:"Television",
    price:15000,
    image: '../../assets/images/products/tv.jpg',
    desc:"Television (TV), sometimes shortened to tele or telly, is a telecommunication medium used"
  },
  { name:"Smartphone",
    price:15000,
    image: '../../assets/images/products/mobile.jpg',
    desc:"Smartphones are a class of mobile phones and of multi-purpose mobile computing devices."
  }
]

ProductSelect:boolean=false;
pName;
Pprice;
  selectedProduct(product,price){
    this.ProductSelect=true;
    this.pName=product;
    this.Pprice=price;
  }
        public SelectedProductName = this.pName;
  me=false;
  cart(){
    if(this.ProductSelect==true){
     this.me=true;
    }else{
      alert("Please Add Some Product");
    }
  }

  constructor(private data: ProductNameService) { }
  ngOnInit(): void {
  }
  updateText(){
    this.data.updateData(this.pName);
  }
  updateB(){
    this.data.updateBool(false);
  }
  updateCart(){
    if(this.ProductSelect==true){
      this.data.updateCount(true);
     }
  }
  // upcart(){
  //   this.data.updateCount(false);
  // }

  updatePrice(){
    this.data.updatePrice(this.Pprice);
  }


}
