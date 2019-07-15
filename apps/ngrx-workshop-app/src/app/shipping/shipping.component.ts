import { Component } from '@angular/core';
import { ShippingMethod } from '@ngrx-workshop-app/api-interface';
import { ShippingService } from '@ngrx-workshop-app/shipping-data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  shippingCosts$: Observable<ShippingMethod[]>;

  constructor(private shippingService: ShippingService) {
    this.shippingCosts$ = this.shippingService.getShippingPrices();
  }
}
