import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DehsboardComponent } from './dehsboard/dehsboard.component';
import { FaqComponent } from './faq/faq.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

import { SingleProductViewComponent } from './single-product-view/single-product-view.component';
import { SingupComponent } from './singup/singup.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { BuyNow1Component } from './buy-now1/buy-now1.component';
import { SingleProductView1Component } from './single-product-view1/single-product-view1.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { PopularComponent } from './popular/popular.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';


export const routes: Routes = [
  
  {
    
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'edit', component: ProductComponent },
  { path: 'editproduct/:pid', component: EditProductComponent },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  {
    path: 'product',
    component: ProductComponent,
  },
  { path: 'cart', component: CartComponent },
  // { path: '', redirectTo: '/cart', pathMatch: 'full' },

  { path: 'home', component: HomepageComponent },
  { path: 'deshboard', component: DehsboardComponent },
  { path: 'special_offer', component: SpecialOfferComponent },
  { path: 'faq', component: FaqComponent },

  { path: 'contact_us', component: ContactUsComponent },
  { path: 'single', component: SingleProductViewComponent },
  { path: 'single1', component: SingleProductView1Component },
  { path: 'placeOrder', component: PlaceOrderComponent },
  { path: 'popular', component: PopularComponent },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SingupComponent,
  },
  {
    path: 'addProduct',
    component: AddProductComponent,
  },
  {
    path: 'BuyNow',
    component: BuyNowComponent,
  },
  {
    path: 'BuyNow1',
    component: BuyNow1Component,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
