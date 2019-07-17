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

  describe('getItems', () => {
    it('should return expected items', () => {});
  });

  describe('addItem', () => {
    it('should add the item and return all items in cart', () => {});
  });

  describe('checkout', () => {
    it('should add remove all items from the cart and return an empty array', () => {});
  });
});
