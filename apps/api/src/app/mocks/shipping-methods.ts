import { ShippingMethod } from '@ngrx-workshop-app/api-interface';

export const mockShippingMethods: ShippingMethod[] = [
  {
    type: 'Overnight',
    price: 25.99
  },
  {
    type: '2-Day',
    price: 9.99
  },
  {
    type: 'Postal',
    price: 2.99
  }
];
