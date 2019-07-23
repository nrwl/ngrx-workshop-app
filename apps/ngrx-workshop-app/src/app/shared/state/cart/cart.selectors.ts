import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from './cart.reducer';
import { getProductsEntities } from '../products';

const { selectAll, selectEntities } = fromCart.adapter.getSelectors();

// Lookup the 'Cart' feature state managed by NgRx
const getCartState = createFeatureSelector<fromCart.State>(
  fromCart.cartFeatureKey
);

export const getCartLoaded = createSelector(
  getCartState,
  state => state.loaded
);

export const getError = createSelector(
  getCartState,
  state => state.error
);

export const getAllItemsInCart = createSelector(
  getCartState,
  selectAll
);

export const getAllItemsInCartWithProduct = createSelector(
  getAllItemsInCart,
  getProductsEntities,
  (items, productEntities) =>
    items.map(item => ({ ...item, product: productEntities[item.productId] }))
);

export const getCartEntities = createSelector(
  getCartState,
  selectEntities
);

export const getCartTotal = createSelector(
  getAllItemsInCart,
  getProductsEntities,
  (items, products) => {
    return products
      ? items
          .map(item => products[item.productId].price)
          .reduce((a, b) => a + b, 0)
      : 0;
  }
);
