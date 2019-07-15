import { Injectable } from '@nestjs/common';
import { Product } from '@ngrx-workshop-app/api-interface';

@Injectable()
export class CartService {
  private items: Product[] = [];

  constructor() {}

  getItems(): Product[] {
    return this.items;
  }

  addItem(product: Product): Product[] {
    this.items.push(product);
    return this.items;
  }

  checkout(): Product[] {
    this.items = [];
    return this.items;
  }
}
