import { Product } from '@ngrx-workshop-app/api-interface';
import { createAction, props } from '@ngrx/store';

export const enterProductsPage = createAction('[Products Page] Enter');

export const enterProductDetailsPage = createAction(
  '[Products Details Page] Enter',
  props<{ id: string }>()
);

export const addToCart = createAction(
  '[Products Details Page] Add to Cart',
  props<{ productId: string }>()
);

export const loadProductsSuccess = createAction(
  '[Products API] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products API] Load Products Failure',
  props<{ error: any }>()
);
