import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemWithProduct } from '@ngrx-workshop-app/api-interface';
import * as fromShipping from '@ngrx-workshop-app/shared/state/shipping';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  checkoutForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  });

  items = new Array<ItemWithProduct>();
  shippingOptions$ = this.store.pipe(
    select(fromShipping.selectAllShippingOptions)
  );
  selectedMethod$ = this.store.pipe(
    select(fromShipping.selectSelectedShippingOption)
  );
  cartSubtotal = 0;
  shippingSubtotal$ = this.store.pipe(select(fromShipping.selectShippingCost));
  grandTotal = 0;
  shippingInvalid$ = this.store.pipe(select(fromShipping.getShippingInvalid));
  cartInvalid = false;

  shippingInfoInvalid$ = this.checkoutForm.statusChanges.pipe(
    map(x => x !== 'VALID'),
    startWith(true)
  );

  checkoutDisabled$: Observable<boolean> = combineLatest([
    this.shippingInvalid$,
    this.shippingInfoInvalid$
  ]).pipe(map(arr => arr.some(x => x === true)));

  constructor(private store: Store<{}>) {}

  ngOnInit() {}

  optionSelected(shippingMethod: string) {}

  onSubmit() {
    this.checkoutForm.reset();
  }
}
