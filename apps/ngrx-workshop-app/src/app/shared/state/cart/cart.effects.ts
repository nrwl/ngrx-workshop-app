import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CartService } from '@ngrx-workshop-app/cart-data-access';
import { Actions } from '@ngrx/effects';

@Injectable()
export class CartEffects {
  // TODO: Implement Cart Effects

  constructor(
    private actions$: Actions,
    private cartService: CartService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
}
