import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.css']
})
export class SpecialOfferComponent {
  products = [
    { id: 1, name: 'Fresh Super Premium (Vacuum) Salt', price: 180, imageUrl: 'assets/fresh-fortified-soyabean-oil-5-ltr (1).webp' },
    { id: 2, name: 'Fresh White Flour (Maida)', price: 132, imageUrl: 'assets/fresh-premium-moshur-dal-1-kg (1).webp' },
    { id: 3, name: 'Super Fresh Drinking Water', price: 90, imageUrl: 'assets//odomos-mosquito-repellent-cream-50-gm.webp' },
    { id: 4, name: "Fresh Paper Napkins 13'' Perfumed (100X1 Ply)", price: 70, imageUrl: 'assets//denim-black-after-shave-lotion-100-ml.webp' },
    { id: 5, name: 'Fresh Premium Moshur Dal', price: 155, imageUrl: 'assets//walnuts-akhrot-100-gm.webp' },

    { id: 7, name: 'Fresh Table Tissue 1 box', price: 90, imageUrl: 'assets//_mpimage (5).webp' },
    { id: 8, name: 'Fresh Refined Sugar', price: 132, oldPrice: 145, imageUrl: 'assets//_mpimage (4).webp' }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    console.log("Adding to Cart:", product);
    this.cartService.addToCart(product);
    
    // Show an alert message
    alert('Item added to cart!');
  }
}