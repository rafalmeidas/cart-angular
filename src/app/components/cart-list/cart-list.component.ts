import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  constructor(private cartService: CartService) {}

  get cartItems() {
    return this.cartService.getItems();
  }

  get sum(): number {
    return this.cartService.sumCalc();
  }

  removeToCart(index: number) {
    this.cartService.removeToCart(index);
  }
}
