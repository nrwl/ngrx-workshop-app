import { Injectable } from '@nestjs/common';
import { ShippingMethod } from '@ngrx-workshop-app/api-interface';
import { mockShippingMethods } from './mocks/shipping-methods';

@Injectable()
export class ShippingService {
  private shippingMethods: ShippingMethod[];

  constructor() {
    this.shippingMethods = mockShippingMethods;
  }

  getShippingMethods(): ShippingMethod[] {
    return this.shippingMethods;
  }
}
