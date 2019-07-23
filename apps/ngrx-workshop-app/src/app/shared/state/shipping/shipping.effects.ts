import { Injectable } from '@angular/core';
import { ShippingService } from '@ngrx-workshop-app/shipping-data-access';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  requestShippingOptions,
  shippingOptionsLoaded
} from './shipping.actions';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable()
export class ShippingEffects {
  getShippingOptions$ = createEffect(() =>
    this.actions.pipe(
      ofType(requestShippingOptions),
      switchMap(() => this.shippingService.getShippingPrices()),
      map(shippingMethods => shippingOptionsLoaded({ shippingMethods }))
    )
  );

  constructor(
    private actions: Actions,
    private shippingService: ShippingService
  ) {}
}
