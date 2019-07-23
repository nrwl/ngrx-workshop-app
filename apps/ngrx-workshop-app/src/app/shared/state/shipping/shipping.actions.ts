import { createAction, props } from '@ngrx/store';
import { ShippingMethod } from '@ngrx-workshop-app/api-interface';

export const requestShippingOptions = createAction(
  '[SHIPPING] Request Options'
);

export const shippingOptionsLoaded = createAction(
  '[SHIPPING] Options Loaded',
  props<{ shippingMethods: ShippingMethod[] }>()
);

export const shippingOptionsError = createAction(
  '[SHIPPING] Options Request Errored',
  props<{ errorMsg: string }>()
);

export const selectShippingMethod = createAction(
  '[SHIPPING] Select Method',
  props<{ shippingMethod: string }>()
);

export const clearShippingOption = createAction(
  '[SHIPPING] Clear Shipping Option'
);
