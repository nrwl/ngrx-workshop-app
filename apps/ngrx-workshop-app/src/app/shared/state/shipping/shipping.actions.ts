import { createAction, props } from '@ngrx/store';
import { ShippingMethod } from '@ngrx-workshop-app/api-interface';

export const shippingApiOptionsLoadedSuccess = createAction(
  '[Shipping API] Options Loaded Success',
  props<{ shippingMethods: ShippingMethod[] }>()
);

export const shippingApiOptionsLoadFailure = createAction(
  '[Shipping API] Options Load Failure',
  props<{ error: string }>()
);

export const shippingDialogSelectShippingMethod = createAction(
  '[Shipping Dialog] Select Shipping Method',
  props<{ shippingMethod: string }>()
);

export const cartPageSelectShippingMethod = createAction(
  '[Cart Page] Select Shipping Method',
  props<{ shippingMethod: string }>()
);

export const cartPagePurchaseSuccess = createAction(
  '[Cart Page] PurchaseSuccess'
);
