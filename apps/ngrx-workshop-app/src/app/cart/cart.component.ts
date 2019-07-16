import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromCart from '../shared/state/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items$ = this.store.select(fromCart.getAllProductsInCart);
  checkoutForm: FormGroup;

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

  onSubmit(customerData) {
    this.store.dispatch(fromCart.checkout());
    this.checkoutForm.reset();
  }
}
