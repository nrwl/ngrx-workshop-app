import { Injectable } from '@nestjs/common';
import { Item } from '@ngrx-workshop-app/api-interface';

@Injectable()
export class CartService {
  private itemCount = 0;
  private items: Item[] = [];

  constructor() {}

  getItems(): Item[] {
    return this.items;
  }

  addItem(productId: string): Item[] {
    this.items.push({
      itemId: `${this.itemCount++}`,
      productId: productId
    });
    return this.items;
  }

  checkout(): Item[] {
    this.items = [];
    return this.items;
  }
}
