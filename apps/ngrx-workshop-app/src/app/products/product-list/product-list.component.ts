import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProducts from '@ngrx-workshop-app/shared/state/products';
import { MatSnackBar } from '@angular/material';
import { ProductActions } from '@ngrx-workshop-app/shared/state/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$ = this.store.pipe(select(fromProducts.getAllProducts));

  constructor(private store: Store<{}>, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.store.dispatch(ProductActions.enterProductsPage());
  }

  share() {
    this.snackBar.open('The product has been shared!', undefined, {
      duration: 1000
    });
  }
}
