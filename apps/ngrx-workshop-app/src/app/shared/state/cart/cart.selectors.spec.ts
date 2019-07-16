import { Product } from '@ngrx-workshop-app/api-interface';
import * as CartSelectors from './cart.selectors';

describe('Cart Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProductsId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createProducts = (id: string, name = ''): Product => ({
      productId: id,
      name: name || `name-${id}`,
      description: '',
      price: 4.99
    });
    storeState = {
      products: {
        list: [
          createProducts('PRODUCT-AAA'),
          createProducts('PRODUCT-BBB'),
          createProducts('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Cart Selectors', () => {
    it('getAllProductsInCart() should return the list of Products', () => {
      const results = CartSelectors.getAllProductsInCart(storeState);
      const selId = getProductsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = CartSelectors.getCartLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = CartSelectors.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
