import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  shippingAdapter,
  shippingFeatureKey,
  ShippingState
} from './shipping.reducer';

export const NO_SHIPPING_METHOD_SELECTED_TOKEN = {};
Object.freeze(NO_SHIPPING_METHOD_SELECTED_TOKEN);

const { selectAll, selectEntities } = shippingAdapter.getSelectors();

export const selectShippingFeatureSelector = createFeatureSelector<
  ShippingState
>(shippingFeatureKey);

export const selectAllShippingOptions = createSelector(
  selectShippingFeatureSelector,
  selectAll
);

export const selectSelectedShippingOption = createSelector(
  selectShippingFeatureSelector,
  state => state.selectedMethod || NO_SHIPPING_METHOD_SELECTED_TOKEN
);

export const getShippingInvalid = createSelector(
  selectSelectedShippingOption,
  selected => selected === NO_SHIPPING_METHOD_SELECTED_TOKEN
);

export const selectShippingEntities = createSelector(
  selectShippingFeatureSelector,
  selectEntities
);

export const selectShippingCost = createSelector(
  selectShippingEntities,
  selectSelectedShippingOption,
  (entities, selected) =>
    selected === NO_SHIPPING_METHOD_SELECTED_TOKEN
      ? 0
      : entities[selected as string].price
);
