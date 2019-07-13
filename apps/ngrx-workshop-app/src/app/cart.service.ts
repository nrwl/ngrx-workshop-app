import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ShippingMethod } from '@ngrx-workshop-app/api-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<ShippingMethod[]> {
    return this.http.get<ShippingMethod[]>('api/shipping');
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('api/products');
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`api/products/${productId}`);
  }
}
