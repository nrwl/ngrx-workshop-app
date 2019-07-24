import { Injectable } from '@angular/core';
import { ShippingService } from '@ngrx-workshop-app/shipping-data-access';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AppActions from '../app';
import * as ShippingActions from './shipping.actions';

@Injectable()
export class ShippingEffects {
  getShippingOptions$ = createEffect(() =>
    this.actions.pipe(
      ofType(AppActions.init),
      switchMap(() => this.shippingService.getShippingPrices()),
      map(shippingMethods =>
        ShippingActions.shippingApiOptionsLoadedSuccess({ shippingMethods })
      ),
      catchError((error: Error) =>
        of(
          ShippingActions.shippingApiOptionsLoadFailure({
            errorMsg: error.message
          })
        )
      )
    )
  );

  dispatchAppInit$ = createEffect(() => of(AppActions.init()));

  constructor(
    private actions: Actions,
    private shippingService: ShippingService
  ) {}
}
