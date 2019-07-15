import { Test } from '@nestjs/testing';
import { ShippingService } from './shipping.service';

describe('ShippingService', () => {
  let service: ShippingService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ShippingService]
    }).compile();

    service = app.get<ShippingService>(ShippingService);
  });

  describe('getShippingMethods', () => {
    it('should return mock shipping methods', () => {
      expect(service.getShippingMethods()).toEqual([
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
      ]);
    });
  });
});
