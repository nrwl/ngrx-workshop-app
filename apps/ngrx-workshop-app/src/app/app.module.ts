import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CartDataAccessModule } from '@ngrx-workshop-app/cart-data-access';
import { ProductDataAccessModule } from '@ngrx-workshop-app/product-data-access';
import { ShippingDataAccessModule } from '@ngrx-workshop-app/shipping-data-access';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartStateModule } from './shared/state/cart';
import { ProductsStateModule } from './shared/state/products';
import { ShippingStateModule } from './shared/state/shipping/shipping.module';
import { ShippingMethodSelectionDialogComponent } from './shipping-method-selection-dialog/shipping-method-selection-dialog.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingMethodSelectionDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CartDataAccessModule,
    ProductDataAccessModule,
    ShippingDataAccessModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictStateImmutability: true
          // strictActionImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    ProductsStateModule,
    CartStateModule,
    ShippingStateModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ShippingMethodSelectionDialogComponent]
})
export class AppModule {}
