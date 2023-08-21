import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardModule } from '../product-card/product-card.module';
import { AlertModule } from '../alert/alert.module';

import { CartService } from 'src/app/services/cart/cart.service';

import { CartListComponent } from './cart-list.component';

@NgModule({
  declarations: [CartListComponent],
  exports: [CartListComponent],
  imports: [CommonModule, ProductCardModule, AlertModule],
})
export class CartListModule {
  constructor(private cartService: CartService) {}

  removeToCart(index: number) {
    this.cartService.removeToCart(index);
  }
}
