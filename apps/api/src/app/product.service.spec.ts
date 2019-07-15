import { Test } from '@nestjs/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ProductService]
    }).compile();

    service = app.get<ProductService>(ProductService);
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
