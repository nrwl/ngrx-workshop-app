import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CartService } from './cart.service';
import { ProductService } from './product.service';
import { ShippingService } from './shipping.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CartService, ProductService, ShippingService]
})
export class AppModule {}
