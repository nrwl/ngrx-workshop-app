import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@ngrx-workshop-app/api-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('api/products');
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`api/products/${productId}`);
  }
}
