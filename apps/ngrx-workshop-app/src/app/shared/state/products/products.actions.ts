import { Product } from '@ngrx-workshop-app/api-interface';
import { createAction, props } from '@ngrx/store';

export const enterProductsPage = createAction('[Products Page] Enter');

export const enterProductDetailsPage = createAction(
  '[Products Details Page] Enter',
  props<{ id: string }>()
);

// TODO: Implement addToCart action

export const loadProductsSuccess = createAction(
  '[Products API] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products API] Load Products Failure',
  props<{ error: any }>()
);
