import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ShippingMethod } from '@ngrx-workshop-app/api-interface';
import { createReducer, on, Action } from '@ngrx/store';
import {
  appInit,
  shippingApiOptionsLoadedSuccess,
  shippingApiOptionsLoadFailure,
  shippingDialogSelectShippingMethod,
  cartPageSelectShippingMethod,
  cartPagePurchaseSuccess
} from './shipping.actions';

export interface ShippingState extends EntityState<ShippingMethod> {
  selectedMethod: string | null;
  loading: boolean;
}

export const shippingAdapter = createEntityAdapter<ShippingMethod>({
  selectId: shippingMethod => shippingMethod.type
});

export const initialState: ShippingState = shippingAdapter.getInitialState({
  selectedMethod: null,
  loading: false
});

const shippingReducer = createReducer<ShippingState>(
  initialState,
  on(appInit, state => ({ ...state, loading: true })),
  on(shippingApiOptionsLoadedSuccess, (state, { shippingMethods }) => ({
    ...shippingAdapter.addAll(shippingMethods, state),
    loading: false
  })),
  on(shippingApiOptionsLoadFailure, (state, { errorMsg }) => state),
  on(
    shippingDialogSelectShippingMethod,
    cartPageSelectShippingMethod,
    (state, { shippingMethod }) => ({
      ...state,
      selectedMethod: shippingMethod
    })
  ),
  on(cartPagePurchaseSuccess, state => ({ ...state, selectedMethod: null }))
);

export function reducer(state: ShippingState | undefined, action: Action) {
  return shippingReducer(state, action);
}
