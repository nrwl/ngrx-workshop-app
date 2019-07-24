import { createFeatureSelector, createSelector } from '@ngrx/store';
import { shippingAdapter, ShippingState } from './shipping.reducer';

export const NO_SHIPPING_METHOD_SELECTED_TOKEN = {};
Object.freeze(NO_SHIPPING_METHOD_SELECTED_TOKEN);

export const selectShippingFeatureSelector = createFeatureSelector<
  ShippingState
>('shipping');

export const selectAllShippingOptions = createSelector(
  selectShippingFeatureSelector,
  shippingAdapter.getSelectors().selectAll
);

export const selectSelectedShippingOption = createSelector(
  selectShippingFeatureSelector,
  state => state.selectedMethod || NO_SHIPPING_METHOD_SELECTED_TOKEN
);

export const selectShippingEntities = createSelector(
  selectShippingFeatureSelector,
  shippingAdapter.getSelectors().selectEntities
);

export const selectShippingCost = createSelector(
  selectShippingEntities,
  selectSelectedShippingOption,
  (entities, selected) =>
    selected === NO_SHIPPING_METHOD_SELECTED_TOKEN
      ? 0
      : entities[selected as string].price
);
