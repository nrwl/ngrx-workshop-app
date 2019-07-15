import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@ngrx-workshop-app/api-interface';
import { CartService } from '@ngrx-workshop-app/cart-data-access';
import { ProductService } from '@ngrx-workshop-app/product-data-access';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product$ = this.productService.getProduct(+params.get('productId'));
    });
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
