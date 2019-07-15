import { Test } from '@nestjs/testing';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [CartService]
    }).compile();

    service = app.get<CartService>(CartService);
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

  describe('getProducts', () => {
    it('should return mock products', () => {
      expect(service.getProducts()).toEqual([
        {
          productId: 1,
          name: 'Phone XL',
          price: 799,
          description: 'A large phone with one of the best screens'
        },
        {
          productId: 2,
          name: 'Phone Mini',
          price: 699,
          description: 'A great phone with one of the best cameras'
        },
        {
          productId: 3,
          name: 'Phone Standard',
          price: 299,
          description: ''
        }
      ]);
    });
  });
});
