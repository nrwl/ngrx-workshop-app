import { Product } from '@ngrx-workshop-app/api-interface';
import * as CartSelectors from './cart.selectors';

describe('Cart Selectors', () => {
  const ERROR_MSG = 'No Error Available';

  let storeState;

  beforeEach(() => {
    const createProducts = (id: string, name = ''): Product => ({
      productId: id,
      name: name || `name-${id}`,
      description: '',
      price: 4.99
    });
    storeState = {
      cart: {
        ids: ['PRODUCT-AAA', 'PRODUCT-BBB', 'PRODUCT-CCC'],
        entities: {
          ['PRODUCT-AAA']: createProducts('PRODUCT-AAA'),
          ['PRODUCT-BBB']: createProducts('PRODUCT-BBB'),
          ['PRODUCT-CCC']: createProducts('PRODUCT-CCC')
        },
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Cart Selectors', () => {
    it('getAllProductsInCart() should return the list of products in cart', () => {
      const results = CartSelectors.getAllProductsInCart(storeState);
      expect(results.length).toBe(3);
    });

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
