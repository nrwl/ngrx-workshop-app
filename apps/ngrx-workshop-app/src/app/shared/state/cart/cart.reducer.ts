import { Product } from '@ngrx-workshop-app/api-interface';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';

export interface State extends EntityState<Product> {
  loaded: boolean;
  error: string | null;
}

export const cartFeatureKey = 'cart';

export const adapter = createEntityAdapter<Product>({
  selectId: (model: Product) => model.productId
});

export const initialState: State = adapter.getInitialState({
  loaded: false,
  error: null
});

const cartReducer = createReducer(
  initialState,
  on(CartActions.enterCartPage, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(CartActions.loadCartSuccess, (state, { products }) =>
    adapter.addAll(products, { ...state, loaded: true, error: null })
  ),
  on(CartActions.loadCartFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(CartActions.checkout, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(CartActions.checkoutSuccess, (state, { products }) =>
    adapter.addAll(products, { ...state, loaded: true, error: null })
  ),
  on(CartActions.checkoutFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(CartActions.addToCart, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(CartActions.addToCartSuccess, (state, { products }) =>
    adapter.addAll(products, { ...state, loaded: true, error: null })
  ),
  on(CartActions.addToCartFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return cartReducer(state, action);
}
