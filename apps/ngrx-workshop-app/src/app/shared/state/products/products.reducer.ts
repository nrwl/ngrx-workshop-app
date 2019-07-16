import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Product } from '@ngrx-workshop-app/api-interface';

import * as ProductsActions from './products.actions';

export interface State extends EntityState<Product> {
  selectedId: string | null;
  loaded: boolean;
  error: string | null;
}

export const productsFeatureKey = 'products';

export const adapter = createEntityAdapter<Product>({
  selectId: (model: Product) => model.productId
});

export const initialState: State = adapter.getInitialState({
  selectedId: null,
  loaded: false,
  error: null
});

const productsReducer = createReducer(
  initialState,
  on(ProductsActions.enterProductsPage, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(ProductsActions.enterProductDetailsPage, (state, { id }) => ({
    ...state,
    selectedId: id
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) =>
    adapter.addAll(products, { ...state, loaded: true, error: null })
  ),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return productsReducer(state, action);
}
