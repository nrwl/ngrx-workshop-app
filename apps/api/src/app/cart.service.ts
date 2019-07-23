import { Injectable } from '@nestjs/common';
import { Item } from '@ngrx-workshop-app/api-interface';

@Injectable()
export class CartService {
  private serialNumber = 0;
  private items: Item[] = [];

  constructor() {}

  getItems(): Item[] {
    return this.items;
  }

  addItem(productId: string): Item[] {
    this.items.push({
      serialNumber: `${this.serialNumber++}`,
      productId: productId
    });
    return this.items;
  }

  checkout(): Item[] {
    this.items = [];
    return this.items;
  }
}
