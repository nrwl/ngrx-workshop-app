import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Item } from '@ngrx-workshop-app/api-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('api/cart');
  }

  addToCart(productId: string): Observable<Item[]> {
    console.log(productId);
    return this.http.post<Item[]>('api/cart', { productId });
  }

  checkout(): Observable<Item[]> {
    return this.http.delete<Item[]>('api/cart');
  }
}
