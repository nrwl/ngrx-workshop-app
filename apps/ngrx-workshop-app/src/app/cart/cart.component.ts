import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemWithProduct } from '@ngrx-workshop-app/api-interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCart from '../shared/state/cart';
import {
  clearShippingOption,
  selectAllShippingOptions,
  selectSelectedShippingOption,
  selectShippingMethod
} from '../shared/state/shipping';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items$: Observable<ItemWithProduct[]> = this.store.select(
    fromCart.getAllItemsInCartWithProduct
  );
  checkoutForm: FormGroup;
  shippingOptions$ = this.store.select(selectAllShippingOptions);
  selectedMethod$ = this.store.select(selectSelectedShippingOption);

  constructor(
    private store: Store<{ cart: fromCart.State }>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.store.dispatch(fromCart.enterCartPage());
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  optionSelected(method: string) {
    this.store.dispatch(selectShippingMethod({ shippingMethod: method }));
  }

  onSubmit(customerData) {
    this.store.dispatch(fromCart.checkout());
    this.checkoutForm.reset();
    this.store.dispatch(clearShippingOption());
  }
}
