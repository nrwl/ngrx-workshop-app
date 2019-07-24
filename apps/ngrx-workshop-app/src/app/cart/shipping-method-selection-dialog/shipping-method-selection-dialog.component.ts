import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { combineLatest, merge, Subject } from 'rxjs';
import { map, publishReplay, refCount, startWith, take } from 'rxjs/operators';

import * as fromShipping from '@ngrx-workshop-app/shared/state/shipping';

@Component({
  selector: 'ngrx-workshop-app-shipping-method-selection-dialog',
  templateUrl: './shipping-method-selection-dialog.component.html',
  styleUrls: ['./shipping-method-selection-dialog.component.css']
})
export class ShippingMethodSelectionDialogComponent implements OnInit {
  private _userSelections$ = new Subject<string>();
  private _originallySelectedOption$ = this.store.pipe(
    select(fromShipping.selectSelectedShippingOption),
    take(1),
    publishReplay(1),
    refCount()
  );

  shippingOptions$ = this.store.pipe(
    select(fromShipping.selectAllShippingOptions)
  );

  currentlySelected$ = merge(
    this._originallySelectedOption$,
    this._userSelections$
  ).pipe(
    publishReplay(1),
    refCount()
  );

  selectDisabled$ = combineLatest([
    this.currentlySelected$.pipe(
      startWith(fromShipping.NO_SHIPPING_METHOD_SELECTED_TOKEN)
    ),
    this._originallySelectedOption$
  ]).pipe(
    map(([current, original]) =>
      current === fromShipping.NO_SHIPPING_METHOD_SELECTED_TOKEN
        ? true
        : current === original
    )
  );

  constructor(
    private store: Store<{}>,
    private dialogRef: MatDialogRef<ShippingMethodSelectionDialogComponent>
  ) {}

  ngOnInit() {}

  optionSelected(option: string) {
    this._userSelections$.next(option);
  }

  select(shippingMethod: string) {
    this.store.dispatch(
      fromShipping.shippingDialogSelectShippingMethod({ shippingMethod })
    );
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
