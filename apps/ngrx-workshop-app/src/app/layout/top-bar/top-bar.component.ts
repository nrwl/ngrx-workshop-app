import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShippingMethodSelectionDialogComponent } from '@ngrx-workshop-app/cart/shipping-method-selection-dialog/shipping-method-selection-dialog.component';
import * as fromShipping from '@ngrx-workshop-app/shared/state/shipping';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'ngrx-workshop-app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  total = 0;
  shippingMethod$ = this.store.pipe(
    select(fromShipping.selectSelectedShippingOption)
  );
  NO_SHIPPING_METHOD_SELECTED_TOKEN =
    fromShipping.NO_SHIPPING_METHOD_SELECTED_TOKEN;

  constructor(private dialog: MatDialog, private store: Store<{}>) {}

  openShippingOptions() {
    this.dialog.open(ShippingMethodSelectionDialogComponent, {
      width: '450px'
    });
  }
}
