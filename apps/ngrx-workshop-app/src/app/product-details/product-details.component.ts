import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromCart from '../shared/state/cart';
import * as fromProducts from '../shared/state/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product$ = this.store.select(fromProducts.getSelectedProduct);

  constructor(private store: Store<{}>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params =>
          fromProducts.enterProductDetailsPage({ id: params.get('productId') })
        )
      )
      .subscribe(this.store);
  }

  addToCart(product) {
    this.store.dispatch(fromCart.addToCart({ product }));
  }
}
