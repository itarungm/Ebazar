import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductNameService } from './appServices/product-name.service';
import { CartCountService } from './appServices/cart-count.service';
import { ProductFilterPipe } from './appPipes/product-filter.pipe';
import { FooterComponent } from './footer/footer.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    SignUpComponent,
    LoginComponent,
    CartComponent,
    NotFoundComponent,
    ProductFilterPipe,
    FooterComponent,
    AddressComponent,
    PaymentComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingBarRouterModule
  ],
  providers: [ProductNameService,CartCountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
