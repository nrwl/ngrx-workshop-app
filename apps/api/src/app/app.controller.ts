import { Controller, Get, Param } from '@nestjs/common';
import { Product, ShippingMethod } from '@ngrx-workshop-app/api-interface';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('shipping')
  getShippingMethods(): ShippingMethod[] {
    return this.appService.getShippingMethods();
  }

  @Get('products')
  getProducts(): Product[] {
    return this.appService.getProducts();
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string): Product {
    return this.appService.getProduct(+productId);
  }
}
