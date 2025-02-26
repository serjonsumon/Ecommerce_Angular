import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [
    { id: 1, name: 'Fresh Super Premium (Vacuum) Salt', price: 42, imageUrl: 'assets/fresh-super-premium-vacuum-salt-1-kg (1).webp' },
    { id: 2, name: 'Fresh White Flour (Maida)', price: 132, imageUrl: 'assets/fresh-white-flour-maida-2-kg (1).webp' },
    { id: 3, name: 'Super Fresh Drinking Water', price: 90, imageUrl: 'assets/super-fresh-drinking-water-8-ltr (1).webp' },
    { id: 4, name: "Fresh Paper Napkins 13'' Perfumed (100X1 Ply)", price: 70, imageUrl: 'assets/bashundhara-paper-napkins-13-unscented-special-offer-100-pcs (1).webp' },
    { id: 5, name: 'Fresh Premium Moshur Dal', price: 155, imageUrl: 'assets/fresh-premium-moshur-dal-1-kg (1).webp' },
    { id: 6, name: 'Fresh Hand Towel 1 box', price: 90, imageUrl: 'assets/fresh-hand-towel-1-box (1).webp' },
    { id: 7, name: 'Fresh Table Tissue 1 box', price: 90, imageUrl: 'assets/fresh-hand-towel-250x1-ply-1-pcs (1).webp' },
    { id: 8, name: 'Fresh Refined Sugar', price: 132, oldPrice: 145, imageUrl: 'assets/fresh-refined-sugar-1-kg (1).webp' }
  ];
  

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    console.log("Adding to Cart:", product);
    this.cartService.addToCart(product);
    
    // Show an alert message
    alert('Item added to cart!');
  }
  
  
  // isMenuOpen = false;

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
    isSidePaneVisible: boolean = false;
    // productObj:any ={
    // "id": 0,
    // "name": "",
    // "description": "",
    // "category": "",
    // "price": 0,
    // "stock": 0,
    // "brand": "",
    // "colors": [""],
    // "productImageUrl": "",
    // }
    // openSidePanel(){
    //   this.isSidePaneVisible = true;
    // }
    // closeSidePanel(){
    //   this.isSidePaneVisible = false;
    // }
  }

 


