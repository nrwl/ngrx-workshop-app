import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDataAccessModule } from '@ngrx-workshop-app/product-data-access';

import { ProductsStateModule } from '@ngrx-workshop-app/shared/state/products';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductDataAccessModule,
    ProductsStateModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {}
