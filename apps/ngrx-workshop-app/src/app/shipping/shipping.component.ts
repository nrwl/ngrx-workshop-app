import { Component } from '@angular/core';
import { ShippingMethod } from '@ngrx-workshop-app/api-interface';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  shippingCosts$: Observable<ShippingMethod[]>;

  constructor(private cartService: CartService) {
    this.shippingCosts$ = this.cartService.getShippingPrices();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
