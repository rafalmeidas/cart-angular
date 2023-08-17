import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Cart } from 'src/app/models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Cart[] = [];
  itemCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  addToCart(item: Cart) {
    const existingProduct = this.cartItems.find(
      ({ product }) => product.id === item.product.id
    );

    if (!existingProduct) {
      this.cartItems.push(item);

      this.updateItemCount();
      return;
    }

    this.cartItems = this.cartItems.map((cartItem) => {
      const { product } = cartItem;
      if (product.id === item.product.id) {
        return { ...item, amount: cartItem.amount + item.amount };
      }

      this.updateItemCount();
      return cartItem;
    });
  }

  removeToCart(index: number) {
    this.cartItems.splice(index, 1);
    this.updateItemCount();
  }

  getItems(): Cart[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }

  private updateItemCount(): void {
    this.itemCount.next(this.cartItems.length);
  }
}
