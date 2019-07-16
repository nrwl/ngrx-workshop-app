import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Product, ShippingMethod } from '@ngrx-workshop-app/api-interface';
import { CartService } from './cart.service';
import { ProductService } from './product.service';
import { ShippingService } from './shipping.service';

@Controller()
export class AppController {
  constructor(
    private readonly cartService: CartService,
    private readonly productService: ProductService,
    private readonly shippingService: ShippingService
  ) {}

  @Get('shipping')
  getShippingMethods(): ShippingMethod[] {
    return this.shippingService.getShippingMethods();
  }

  @Get('products')
  getProducts(): Product[] {
    return this.productService.getProducts();
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string): Product {
    return this.productService.getProduct(+productId);
  }

  @Get('cart')
  getCartItems(): Product[] {
    return this.cartService.getItems();
  }

  @Post('cart')
  addToCart(@Body() product: Product): Product[] {
    console.log(product);
    return this.cartService.addItem(product);
  }

  @Delete('cart')
  checkout(): Product[] {
    return this.cartService.checkout();
  }
}
