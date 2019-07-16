import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProducts from '../shared/state/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$ = this.store.select(fromProducts.getAllProducts);

  constructor(private store: Store<{ products: fromProducts.State }>) {}

  ngOnInit() {
    this.store.dispatch(fromProducts.enterProductsPage());
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
