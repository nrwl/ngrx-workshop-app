import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@ngrx-workshop-app/api-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>('api/cart');
  }

  addToCart(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>('api/cart', product);
  }

  checkout(): Observable<Product[]> {
    return this.http.delete<Product[]>('api/cart');
  }
}
