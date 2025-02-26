import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //  private apiURL = "http://localhost:8080/api/cart";
  // http: any;
  // baseUrl: any;


  //   constructor(private httpClient: HttpClient, private router: Router) { }

  //   add(user: any) {
  //     return this.httpClient.post(this.apiURL, user)
  //   }
  //   getCart(): Observable<any> {
  //     return this.http.get(`${this.baseUrl}/view`);
  //   }
  
  //   addToCart(productId: number, quantity: number): Observable<any> {
  //     return this.http.post(`${this.baseUrl}/add`, null, {
  //       params: { productId: productId.toString(), quantity: quantity.toString() }
  //     });
  //   }
  
  //   updateCart(cartId: number, quantity: number): Observable<any> {
  //     return this.http.put(`${this.baseUrl}/update/${cartId}`, null, {
  //       params: { quantity: quantity.toString() }
  //     });
  //   }
  
  //   removeFromCart(cartId: number): Observable<any> {
  //     return this.http.delete(`${this.baseUrl}/remove/${cartId}`);
  //   }
  
  //   clearCart(): Observable<any> {
  //     return this.http.delete(`${this.baseUrl}/clear`);
  //   }
    // updateData(user: any) {
    //   return this.httpClient.put(this.apiURL + "/" + user.id, user)
    // }

    // getAll() {
    //   return this.httpClient.get(this.apiURL);
    // }

    // getByID(id: any) {
    //   return this.httpClient.get(this.apiURL + "/" + id);
    // }

//     deleteByID(id: any) {
//       return this.httpClient.delete(this.apiURL + "/" + id);
//     }


private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]); // Reactive cart state

  cart$ = this.cartSubject.asObservable(); // Observable for UI

  constructor() {}

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: any) {
    if (!product || !product.id) {
      console.error('Invalid product data:', product);
      return;
    }

    const existingItem = this.cartItems.find(item => item.productId === product.id);

    if (existingItem) {
      existingItem.quantity++; // Increase quantity if already in cart
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
      this.cartItems.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: 1,
        totalPrice: product.price
      });
    }

    this.cartSubject.next(this.cartItems); // Notify UI
  }

  updateQuantity(productId: number, quantity: number) {
    const cartItem = this.cartItems.find(item => item.productId === productId);
    if (cartItem) {
      cartItem.quantity = quantity;
      cartItem.totalPrice = cartItem.price * quantity; // Update price
      this.cartSubject.next(this.cartItems);
    }
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.cartSubject.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }
}