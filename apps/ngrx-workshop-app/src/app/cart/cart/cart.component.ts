import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as fromCart from '@ngrx-workshop-app/shared/state/cart';
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

  items$ = this.store.pipe(select(fromCart.getAllItemsInCartWithProduct));
  shippingOptions$ = this.store.pipe(
    select(fromShipping.selectAllShippingOptions)
  );
  selectedMethod$ = this.store.pipe(
    select(fromShipping.selectSelectedShippingOption)
  );
  cartSubtotal$ = this.store.pipe(select(fromCart.getCartTotal));
  shippingSubtotal$ = this.store.pipe(select(fromShipping.selectShippingCost));
  grandTotal$ = this.store.pipe(select(fromCart.getTotal));
  shippingInvalid$ = this.store.pipe(select(fromShipping.getShippingInvalid));
  cartInvalid$ = this.store.pipe(select(fromCart.getCartInvalid));

  shippingInfoInvalid$ = this.checkoutForm.statusChanges.pipe(
    map(x => x !== 'VALID'),
    startWith(true)
  );

  checkoutDisabled$: Observable<boolean> = combineLatest([
    this.shippingInvalid$,
    this.cartInvalid$,
    this.shippingInfoInvalid$
  ]).pipe(map(arr => arr.some(x => x === true)));

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.store.dispatch(fromCart.enterCartPage());
  }

  optionSelected(shippingMethod: string) {
    this.store.dispatch(
      fromCart.cartPageSelectShippingMethod({ shippingMethod })
    );
  }

  onSubmit() {
    this.store.dispatch(fromCart.checkout());
    this.checkoutForm.reset();
  }
}
