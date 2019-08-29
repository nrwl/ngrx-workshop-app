import { ShippingMethod } from '@ngrx-workshop-app/api-interface';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from '../app/app.actions';
import * as ShippingActions from './shipping.actions';

export interface ShippingState extends EntityState<ShippingMethod> {
  selectedMethod: string | null;
  loading: boolean;
  error: string | null;
}

export const shippingFeatureKey = 'shipping';

export const shippingAdapter = createEntityAdapter<ShippingMethod>({
  selectId: shippingMethod => shippingMethod.type
});

export const initialState: ShippingState = shippingAdapter.getInitialState({
  selectedMethod: null,
  loading: false,
  error: null
});

const shippingReducer = createReducer<ShippingState>(
  initialState,
  on(AppActions.init, state => ({ ...state, loading: true })),
  on(
    ShippingActions.shippingApiOptionsLoadedSuccess,
    (state, { shippingMethods }) => ({
      ...shippingAdapter.addAll(shippingMethods, state),
      loading: false
    })
  ),
  on(ShippingActions.shippingApiOptionsLoadFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(
    ShippingActions.shippingDialogSelectShippingMethod,
    (state, { shippingMethod }) => ({
      ...state,
      selectedMethod: shippingMethod
    })
  )
);

export function reducer(state: ShippingState | undefined, action: Action) {
  return shippingReducer(state, action);
}
