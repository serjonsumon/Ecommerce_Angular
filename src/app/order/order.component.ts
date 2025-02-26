import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  implements OnInit {

  orders: any[] =[];
item: any;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((val: any) => {
      console.log(val);
      
      this.orders= val
    })
  }
  removeItem(productId: number) {
    console.log('Removing product with ID:', productId); // Debugging log
  
    // Ensure orders array is valid and the productId exists
    if (productId) {
      this.orders = this.orders.filter(item => item.productId !== productId); // Remove the item with matching productId
      console.log('Updated orders:', this.orders); // Log to confirm the removal
    } else {
      console.log('Invalid productId:', productId); // Log if productId is undefined
    }
  }
}