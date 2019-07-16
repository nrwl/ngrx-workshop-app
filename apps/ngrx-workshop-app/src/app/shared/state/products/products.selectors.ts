import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from './products.reducer';

const { selectAll, selectEntities } = fromProducts.adapter.getSelectors();

// Lookup the 'Products' feature state managed by NgRx
const getProductsState = createFeatureSelector<fromProducts.State>(
  fromProducts.productsFeatureKey
);

export const getProductsLoaded = createSelector(
  getProductsState,
  state => state.loaded
);
export const getError = createSelector(
  getProductsState,
  state => state.error
);

export const getAllProducts = createSelector(
  getProductsState,
  selectAll
);

export const getProductsEntities = createSelector(
  getProductsState,
  selectEntities
);

export const getSelectedProductId = createSelector(
  getProductsState,
  state => state.selectedId
);

export const getSelectedProduct = createSelector(
  getProductsEntities,
  getSelectedProductId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
