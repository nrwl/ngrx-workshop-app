import { Injectable } from '@angular/core';
import { ShippingService } from '@ngrx-workshop-app/shipping-data-access';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  appInit,
  shippingApiOptionsLoadedSuccess,
  shippingApiOptionsLoadFailure
} from './shipping.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ShippingEffects {
  getShippingOptions$ = createEffect(() =>
    this.actions.pipe(
      ofType(appInit),
      switchMap(() => this.shippingService.getShippingPrices()),
      map(shippingMethods =>
        shippingApiOptionsLoadedSuccess({ shippingMethods })
      ),
      catchError((error: Error) =>
        of(shippingApiOptionsLoadFailure({ errorMsg: error.message }))
      )
    )
  );

  dispatchAppInit$ = createEffect(() => of(appInit()));

  constructor(
    private actions: Actions,
    private shippingService: ShippingService
  ) {}
}
