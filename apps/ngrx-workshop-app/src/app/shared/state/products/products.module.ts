import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromProducts from './products.reducer';
import { ProductsEffects } from './products.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromProducts.productsFeatureKey,
      fromProducts.reducer
    ),
    EffectsModule.forFeature([ProductsEffects])
  ]
})
export class ProductsStateModule {}
