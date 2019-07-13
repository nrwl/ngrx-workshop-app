import { Injectable } from '@nestjs/common';
import { Product, ShippingMethod } from '@ngrx-workshop-app/api-interface';
import { mockProducts } from './mocks/products';
import { mockShippingMethods } from './mocks/shipping-methods';

@Injectable()
export class AppService {
  private products: Product[];
  private shippingMethods: ShippingMethod[];

  constructor() {
    this.products = mockProducts;
    this.shippingMethods = mockShippingMethods;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getShippingMethods(): ShippingMethod[] {
    return this.shippingMethods;
  }

  getProduct(productId: number): Product {
    return this.products.find(product => product.productId === productId);
  }
}
