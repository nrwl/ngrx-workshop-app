import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { CartService } from './cart.service';
import { ProductService } from './product.service';
import { ShippingService } from './shipping.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [CartService, ProductService, ShippingService]
    }).compile();
  });

  describe('getShippingMethods', () => {
    it('should return expected list of methods', () => {});
  });

  describe('getProducts', () => {});

  describe('getProduct', () => {});

  describe('getCartItems', () => {});

  describe('addToCart', () => {});

  describe('checkout', () => {});

  // describe('getData', () => {
  //   it('should return "Welcome to api!"', () => {
  //     const appController = app.get<AppController>(AppController);
  //     expect(appController.getData()).toEqual({ message: 'Welcome to api!' });
  //   });
  // });
});
