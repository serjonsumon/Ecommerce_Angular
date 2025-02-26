import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DehsboardComponent } from './dehsboard/dehsboard.component';
import { FaqComponent } from './faq/faq.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { CatagoryComponent } from './pages/admin/website/catagory/catagory.component';
import { ProductsComponent } from './pages/admin/website/catagoryProducts/products.component';
import { CheckoutComponent } from './pages/admin/website/checkout/checkout.component';
import { CustomerCartComponent } from './pages/admin/website/customer-cart/customer-cart.component';
import { CustomerOrdersComponent } from './pages/admin/website/customer-orders/customer-orders.component';
import { LandingComponent } from './pages/admin/website/landing/landing.component';
import { ProductComponent } from './product/product.component';
import { SingleProductViewComponent } from './single-product-view/single-product-view.component';
import { SingupComponent } from './singup/singup.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { BuyNow1Component } from './buy-now1/buy-now1.component';
import { SingleProductView1Component } from './single-product-view1/single-product-view1.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { PopularComponent } from './popular/popular.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
// import { Login1Component } from './login1/login1.component';
// import { FruitsVegetablesComponent } from './fruits-vegetables/fruits-vegetables.component';





// import { ProductComponent } from './services/product/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    LoginComponent,
    CatagoriesComponent,
    CustomerComponent,
    LandingComponent,
    CatagoryComponent,
    CustomerCartComponent,
    CheckoutComponent,
    CustomerOrdersComponent,
    HomepageComponent,
    DehsboardComponent,
    SpecialOfferComponent,
    FaqComponent,
    ContactUsComponent,
    SingupComponent,
    SingleProductViewComponent,
    ProductComponent,
    ProductsComponent,
    CartComponent,
    AddProductComponent,
    EditProductComponent,
    BuyNowComponent,
    BuyNow1Component,
    SingleProductView1Component,
    PlaceOrderComponent,
    PopularComponent,
    UserComponent,
    OrderComponent
    
    // Login1Component,
    // FruitsVegetablesComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
