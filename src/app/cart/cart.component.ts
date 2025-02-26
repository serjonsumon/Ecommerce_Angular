import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { OrderService } from '../service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router // Inject order service
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  calculateTotal() {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  increaseQuantity(productId: number) {
    const item = this.cartItems.find(i => i.productId === productId);
    if (item) {
      this.cartService.updateQuantity(productId, item.quantity + 1);
    }
  }

  decreaseQuantity(productId: number) {
    const item = this.cartItems.find(i => i.productId === productId);
    if (item && item.quantity > 1) {
      this.cartService.updateQuantity(productId, item.quantity - 1);
    }
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  // Place order logic
  placeOrder() {
    const orderData = {
      items: this.cartItems,
      totalAmount: this.totalAmount,
    };
  
    // Navigate to the order page with order data
    this.router.navigate(['/placeOrder'], { state: { orderData } });
  }
}


// navigateTo(arg0: string) {
// throw new Error('Method not implemented.');
// }
// addToCart(arg0: any) {
// throw new Error('Method not implemented.');
// }
//   cartItems = [
//     {
//       name: 'Product 1',
//       price: 19.99,
//       image: 'assets/product1.jpg',
//       quantity: 2,
//       total: 39.98
//     },
//     {
//       name: 'Product 2',
//       price: 9.99,
//       image: 'assets/product2.jpg',
//       quantity: 1,
//       total: 9.99
//     }
//   ];
// itemCount: any;
// product: any;

//   // Get the subtotal
//   get subtotal(): number {
//     return this.cartItems.reduce((sum, item) => sum + item.total, 0);
//   }

//   // Get the tax (5% for this example)
//   get tax(): number {
//     return this.subtotal * 0.05;
//   }

//   // Get the total
//   get total(): number {
//     return this.subtotal + this.tax;
//   }

//   // Update the total when quantity changes
//   updateTotal(): void {
//     this.cartItems.forEach(item => {
//       item.total = item.price * item.quantity; // Recalculate total for each item
//     });
//   }

//   // Remove an item from the cart
//   removeItem(item: any): void {
//     const index = this.cartItems.indexOf(item);
//     if (index !== -1) {
//       this.cartItems.splice(index, 1); // Remove item from the cart
//       this.updateTotal(); // Recalculate totals after item removal
//     }
//   }
// }