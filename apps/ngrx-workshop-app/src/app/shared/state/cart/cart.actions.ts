import { Item } from '@ngrx-workshop-app/api-interface';
import { createAction, props } from '@ngrx/store';

export const enterCartPage = createAction('[Cart Page] Enter');

export const checkout = createAction('[Cart Page] Checkout');

export const checkoutSuccess = createAction(
  '[Cart API] Checkout Success',
  props<{ items: Item[] }>()
);

export const checkoutFailure = createAction(
  '[Cart API] Checkout Failure',
  props<{ error: any }>()
);

export const addToCartSuccess = createAction(
  '[Cart API] Add to Cart Success',
  props<{ items: Item[] }>()
);

export const addToCartFailure = createAction(
  '[Cart API] Add to Cart Failure',
  props<{ error: any }>()
);

export const loadCartSuccess = createAction(
  '[Cart API] Load Cart Success',
  props<{ items: Item[] }>()
);

export const loadCartFailure = createAction(
  '[Cart API] Load Cart Failure',
  props<{ error: any }>()
);

export const cartPageSelectShippingMethod = createAction(
  '[Cart Page] Select Shipping Method',
  props<{ shippingMethod: string }>()
);
