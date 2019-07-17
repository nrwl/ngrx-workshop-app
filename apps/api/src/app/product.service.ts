import { Injectable } from '@nestjs/common';
import { Product } from '@ngrx-workshop-app/api-interface';
import { mockProducts } from './mocks/products';

@Injectable()
export class ProductService {
  private products: Product[];

  constructor() {
    this.products = mockProducts;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(productId: number): Product {
    return this.products.find(product => +product.productId === productId);
  }
}
