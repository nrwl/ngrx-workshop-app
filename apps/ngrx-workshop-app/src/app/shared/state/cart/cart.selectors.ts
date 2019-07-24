import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemWithProduct } from '@ngrx-workshop-app/api-interface';

import { getProductsEntities } from '../products';
import { selectShippingCost } from '../shipping';
import * as fromCart from './cart.reducer';

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

export const getCartInvalid = createSelector(
  getAllItemsInCart,
  items => items.length === 0
);

export const getAllItemsInCartWithProduct = createSelector(
  getAllItemsInCart,
  getProductsEntities,
  (items, productEntities): ItemWithProduct[] =>
    items.map(item => ({
      ...item,
      product: productEntities[item.productId]
    }))
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
          .map(item =>
            products[item.productId] ? products[item.productId].price : 0
          )
          .reduce((a, b) => a + b, 0)
      : 0;
  }
);

export const getTotal = createSelector(
  getCartTotal,
  selectShippingCost,
  (cartTotal, shippingCost) => cartTotal + shippingCost
);
