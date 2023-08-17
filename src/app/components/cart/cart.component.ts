import { Component } from '@angular/core';

import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  get cartItems() {
    return this.cartService.getItems();
  }

  removeToCart(index: number) {
    this.cartService.removeToCart(index);
  }
}
