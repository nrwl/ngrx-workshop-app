import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { ItemWithProduct } from '@ngrx-workshop-app/api-interface';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import * as fromCart from '../shared/state/cart';
import {
  cartPagePurchaseSuccess,
  cartPageSelectShippingMethod,
  selectAllShippingOptions,
  selectSelectedShippingOption,
  selectShippingCost,
  NO_SHIPPING_METHOD_SELECTED_TOKEN
} from '../shared/state/shipping';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items$: Observable<ItemWithProduct[]> = this.store.select(
    fromCart.getAllItemsInCartWithProduct
  );
  checkoutForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  });
  shippingOptions$ = this.store.select(selectAllShippingOptions);
  selectedMethod$ = this.store.select(selectSelectedShippingOption);
  cartSubtotal$ = this.store.pipe(select(fromCart.getCartTotal));
  shippingSubtotal$ = this.store.pipe(select(selectShippingCost));
  grandTotal$ = this.store.pipe(select(fromCart.getTotal));
  shippingInvalid$ = this.store.pipe(
    select(selectSelectedShippingOption),
    map(x => x === NO_SHIPPING_METHOD_SELECTED_TOKEN)
  );
  cartInvalid$ = this.store.pipe(
    select(fromCart.getAllItemsInCart),
    map(arr => arr.length === 0)
  );
  shippingInfoInvalid$ = this.checkoutForm.statusChanges.pipe(
    map(x => x !== 'VALID'),
    startWith(true)
  );
  checkoutDisabled$: Observable<boolean> = combineLatest([
    this.shippingInvalid$,
    this.cartInvalid$,
    this.shippingInfoInvalid$
  ]).pipe(map(arr => arr.some(x => x === true)));

  constructor(
    private store: Store<{ cart: fromCart.State }>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.store.dispatch(fromCart.enterCartPage());
  }

  optionSelected(shippingMethod: string) {
    this.store.dispatch(cartPageSelectShippingMethod({ shippingMethod }));
  }

  onSubmit(customerData) {
    this.store.dispatch(fromCart.checkout());
    this.checkoutForm.reset();
    this.store.dispatch(cartPagePurchaseSuccess());
  }
}
