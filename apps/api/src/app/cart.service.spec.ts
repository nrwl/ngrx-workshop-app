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

  // TODO: Build out tests for each method
});
