import { Injectable } from '@angular/core';
import { ProductService } from '@ngrx-workshop-app/product-data-access';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import * as ProductsActions from './products.actions';
import { init } from '../app';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ProductsActions.enterProductsPage,
        ProductsActions.enterProductDetailsPage,
        init
      ),
      exhaustMap(() =>
        this.productsService.getProducts().pipe(
          map(products => ProductsActions.loadProductsSuccess({ products })),
          catchError(() =>
            of(
              ProductsActions.loadProductsFailure({
                error: 'Unable to load products'
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductService
  ) {}
}
