import { Test } from '@nestjs/testing';
import { ShippingMethod } from '@ngrx-workshop-app/api-interface';
import { ShippingService } from './shipping.service';

describe('ShippingService', () => {
  let service: ShippingService;
  let mockShippingMethods: ShippingMethod[];

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ShippingService]
    }).compile();

    service = app.get<ShippingService>(ShippingService);

    mockShippingMethods = [
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
  });

  describe('getShippingMethods', () => {
    it('should return mock shipping methods', () => {
      expect(service.getShippingMethods()).toEqual(mockShippingMethods);
    });
  });
});
