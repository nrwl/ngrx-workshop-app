import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShippingMethod } from '@ngrx-workshop-app/api-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  constructor(private http: HttpClient) {}

  getShippingPrices(): Observable<ShippingMethod[]> {
    return this.http.get<ShippingMethod[]>('api/shipping');
  }
}
