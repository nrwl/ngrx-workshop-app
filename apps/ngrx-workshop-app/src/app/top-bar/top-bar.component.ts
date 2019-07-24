import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import * as fromCart from '../shared/state/cart';
import {
  NO_SHIPPING_METHOD_SELECTED_TOKEN,
  selectSelectedShippingOption
} from '../shared/state/shipping';
import { ShippingMethodSelectionDialogComponent } from '../shipping-method-selection-dialog/shipping-method-selection-dialog.component';

@Component({
  selector: 'ngrx-workshop-app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  total$ = this.store.select(fromCart.getTotal);
  shippingMethod$ = this.store.pipe(select(selectSelectedShippingOption));
  NO_SHIPPING_METHOD_SELECTED_TOKEN = NO_SHIPPING_METHOD_SELECTED_TOKEN;

  constructor(private dialog: MatDialog, private store: Store<any>) {}

  openShippingOptions() {
    this.dialog.open(ShippingMethodSelectionDialogComponent, {
      width: '450px'
    });
  }
}
