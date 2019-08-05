import { ShippingMethod } from '@ngrx-workshop-app/api-interface';
import { createAction, props } from '@ngrx/store';

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
