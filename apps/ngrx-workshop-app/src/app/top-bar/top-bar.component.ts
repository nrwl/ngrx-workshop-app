import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCart from '../shared/state/cart';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  total$ = this.store.select(fromCart.getCartTotal);

  constructor(private store: Store<{ cart: fromCart.State }>) {}
}
