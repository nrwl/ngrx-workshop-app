import { createAction, props } from '@ngrx/store';
import { Product } from '@ngrx-workshop-app/api-interface';

export const enterProductsPage = createAction('[Products Page] Enter');

export const enterProductDetailsPage = createAction(
  '[Products Details Page] Enter',
  props<{ id: string }>()
);

export const loadProductsSuccess = createAction(
  '[Products API] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products API] Load Products Failure',
  props<{ error: any }>()
);
