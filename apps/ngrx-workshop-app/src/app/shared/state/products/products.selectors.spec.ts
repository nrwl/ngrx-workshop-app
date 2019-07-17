import { Product } from '@ngrx-workshop-app/api-interface';
import * as ProductsSelectors from './products.selectors';

describe('Products Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProductsId = it => it['productId'];

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
        ids: ['PRODUCT-AAA', 'PRODUCT-BBB', 'PRODUCT-CCC'],
        entities: {
          ['PRODUCT-AAA']: createProducts('PRODUCT-AAA'),
          ['PRODUCT-BBB']: createProducts('PRODUCT-BBB'),
          ['PRODUCT-CCC']: createProducts('PRODUCT-CCC')
        },
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Products Selectors', () => {
    it('getAllProducts() should return the list of Products', () => {
      const results = ProductsSelectors.getAllProducts(storeState);
      const selId = getProductsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedProducts() should return the selected Product', () => {
      const result = ProductsSelectors.getSelectedProduct(storeState);
      const selId = getProductsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = ProductsSelectors.getProductsLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = ProductsSelectors.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
