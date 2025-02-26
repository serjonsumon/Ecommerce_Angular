import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {
  private apiUrl = 'http://localhost:8080/api/placeOrder';  // Your Spring backend URL
  http: any;
  baseUrl: any;

  constructor(private httpClient: HttpClient) {}

  addProduct(product: any){
    return this.httpClient.post(this.apiUrl, product);  // Sends the POST request to save the product
  }
  getAllData() {
    return this.httpClient.get(this.apiUrl)
  }

  getById(id: any) {
    return this.httpClient.get(this.apiUrl + "/" + id)
  }

  deleteById(id: any) {
    return this.httpClient.delete(this.apiUrl + "/" + id)
  }

  updateData(product: any) {
    return this.httpClient.put(this.apiUrl + "/" + product.id, product)
}
getProductById(id: string): Observable<any> {
  return this.http.get(`${this.baseUrl}/${id}`);
}

updateProduct(product: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${product.id}`, product);
}
}


