import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ShippingEffects } from './shipping.effects';
import { reducer, shippingFeatureKey } from './shipping.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(shippingFeatureKey, reducer),
    EffectsModule.forFeature([ShippingEffects])
  ]
})
export class ShippingStateModule {}
