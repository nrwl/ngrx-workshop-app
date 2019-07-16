import { createFeatureSelector, createSelector } from '@ngrx/store';
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

export const getAllProductsInCart = createSelector(
  getCartState,
  selectAll
);

export const getCartEntities = createSelector(
  getCartState,
  selectEntities
);

export const getCartTotal = createSelector(
  getAllProductsInCart,
  products => {
    return products ? products.map(p => p.price).reduce((a, b) => a + b, 0) : 0;
  }
);
