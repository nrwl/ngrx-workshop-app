import { Injectable } from '@angular/core';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ProductService } from '@ngrx-workshop-app/product-data-access';

import * as ProductsActions from './products.actions';
import { of } from 'rxjs';

@Injectable()
export class ProductsEffects {
  @Effect() loadProducts$ = this.actions$.pipe(
    ofType(
      ProductsActions.enterProductsPage,
      ProductsActions.enterProductDetailsPage
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
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductService
  ) {}
}
