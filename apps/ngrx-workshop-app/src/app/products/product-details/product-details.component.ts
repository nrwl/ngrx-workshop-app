import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Product } from '@ngrx-workshop-app/api-interface';
import * as fromCart from '@ngrx-workshop-app/shared/state/cart';
import * as fromProducts from '@ngrx-workshop-app/shared/state/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product$ = this.store.pipe(select(fromProducts.getSelectedProduct));

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

  addToCart(product: Product) {
    this.store.dispatch(fromCart.addToCart({ productId: product.productId }));
  }
}
