import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@ngrx-workshop-app/api-interface';
import * as fromProducts from '@ngrx-workshop-app/shared/state/products';
import { ProductActions } from '@ngrx-workshop-app/shared/state/products';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

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
          ProductActions.enterProductDetailsPage({ id: params.get('productId') })
        )
      )
      .subscribe(this.store);
  }

  addToCart(product: Product) {
    this.store.dispatch(
      ProductActions.addToCart({ productId: product.productId })
    );
  }
}
