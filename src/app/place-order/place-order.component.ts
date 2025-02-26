import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit{
  cartItems: any[] = [];
  totalAmount: number = 0;
  customer = { name: '', phone: '', address: '' };

  constructor(private cartService: CartService,
     private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    const state = history.state;
    if (state.orderData) {
      this.cartItems = state.orderData.items || [];
      this.totalAmount = state.orderData.totalAmount || 0;
      
      // Calculate total amount for each product
      this.cartItems.forEach(item => {
        item.totalAmount = item.price * item.quantity;
      });
      
      // Calculate the total amount for all products in the cart
      this.totalAmount = this.cartItems.reduce((total, product) => total + product.totalAmount, 0);
    }
  }

  confirmOrder() {
    // Ensure customer object and required fields are filled
    if (!this.customer || !this.customer.name || !this.customer.phone || !this.customer.address) {
      alert('Please fill all details!');
      return;
    }
  
    // Ensure cart items and total amount are valid
    if (!this.cartItems || this.cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
  
    const orderData = {
      items: this.cartItems,
      totalAmount: this.totalAmount,
      customerName: this.customer.name,
      phoneNumber: this.customer.phone,
      address: this.customer.address
    };
  
    this.orderService.placeOrder(orderData).subscribe(
      (response) => {
        alert('Order placed successfully!');
        console.log('Order Response:', response);
        this.router.navigate(['/cart']); // Redirect to cart or home page
      },
      (error) => {
        alert('Order placement failed. Please try again!');
        console.error('Order Error:', error);
      }
    );
  }
  
}

