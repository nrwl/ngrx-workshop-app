import { Product, Item } from '@ngrx-workshop-app/api-interface';
import * as CartSelectors from './cart.selectors';
import * as fromCart from './cart.reducer';
import * as fromProducts from '../products';

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
      cart: fromCart.adapter.addAll([
        createItem('PRODUCT-AAA'),
        createItem('PRODUCT-BBB'),
        createItem('PRODUCT-CCC')
      ], fromCart.initialState),
      products: fromProducts.adapter.addAll([
        createProducts('PRODUCT-AAA'),
        createProducts('PRODUCT-BBB'),
        createProducts('PRODUCT-CCC')
      ], fromProducts.initialState)
    };
  });

  fit('getAllItemsInCartWithProduct() should return the list of products in cart', () => {
    const results = CartSelectors.getAllItemsInCartWithProduct(storeState);
    expect(results.length).toBe(3);
  });

  describe('Cart Selectors', () => {

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = CartSelectors.getCartLoaded(storeState);
      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = CartSelectors.getError(storeState);
      expect(result).toBe(ERROR_MSG);
    });

    it('getCartTotal() should return the correct sum from products price in cart', () => {
      const expected = 14.97;

      const result = CartSelectors.getCartTotal(storeState);

      expect(result).toBe(expected);
    });
  });
});
