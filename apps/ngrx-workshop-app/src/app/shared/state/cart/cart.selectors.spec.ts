import { Item, Product } from '@ngrx-workshop-app/api-interface';
import * as fromProducts from '../products';
import * as fromCart from './cart.reducer';

describe('Cart Selectors', () => {
  const ERROR_MSG = 'No Error Available';

  let storeState;

  beforeEach(() => {
    const createItem = (id: string): Item => ({
      itemId: `item-${id}`,
      productId: id
    });
    const createProducts = (id: string, name = ''): Product => ({
      productId: id,
      name: name || `name-${id}`,
      description: '',
      price: 4.99
    });
    storeState = {
      cart: fromCart.initialState,
      products: fromProducts.adapter.addAll(
        [
          createProducts('PRODUCT-AAA'),
          createProducts('PRODUCT-BBB'),
          createProducts('PRODUCT-CCC')
        ],
        fromProducts.initialState
      )
    };
  });
});
