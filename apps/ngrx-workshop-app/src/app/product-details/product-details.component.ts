import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '@ngrx-workshop-app/cart-data-access';
import { take, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromProducts from '../shared/state/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product$ = this.store.select(fromProducts.getSelectedProduct);

  constructor(
    private store: Store<{}>,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

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
    window.alert('Your product has been added to the cart!');

    // subscribing here to trigger observable to fire
    // take(1) to avoid memory leak

    this.cartService
      .addToCart(product)
      .pipe(take(1))
      .subscribe();
  }
}
