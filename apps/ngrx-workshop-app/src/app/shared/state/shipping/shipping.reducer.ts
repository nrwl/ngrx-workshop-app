import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { ShippingMethod } from '@ngrx-workshop-app/api-interface';
import { createReducer, on, State, Action } from '@ngrx/store';
import {
  requestShippingOptions,
  shippingOptionsLoaded,
  shippingOptionsError,
  selectShippingMethod,
  clearShippingOption
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
  on(requestShippingOptions, state => ({ ...state, loading: true })),
  on(shippingOptionsLoaded, (state, { shippingMethods }) => ({
    ...shippingAdapter.addAll(shippingMethods, state),
    loading: false
  })),
  on(shippingOptionsError, (state, { errorMsg }) => state),
  on(selectShippingMethod, (state, { shippingMethod }) => ({
    ...state,
    selectedMethod: shippingMethod
  })),
  on(clearShippingOption, state => ({ ...state, selectedMethod: null }))
);

export function reducer(state: ShippingState | undefined, action: Action) {
  return shippingReducer(state, action);
}
