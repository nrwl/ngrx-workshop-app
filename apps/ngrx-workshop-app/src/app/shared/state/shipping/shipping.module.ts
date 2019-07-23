import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './shipping.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShippingEffects } from './shipping.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('shipping', reducer),
    EffectsModule.forFeature([ShippingEffects])
  ]
})
export class ShippingStateModule {}
