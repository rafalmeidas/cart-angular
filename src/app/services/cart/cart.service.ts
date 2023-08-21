import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ProductView } from '../../types/product-view.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: ProductView[] = [];
  itemCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  sum: number = 0;

  addToCart(item: ProductView) {
    const existingProduct = this.products.find(
      (product) => product.id === item.id
    );

    if (!existingProduct) {
      this.products.push(item);

      this.updateItemCount();
      return;
    }

    this.products = this.products.map((product) => {
      if (product.id === item.id) {
        return { ...item, amount: product.amount + item.amount };
      }

      this.updateItemCount();
      return product;
    });
  }

  removeToCart(index: number) {
    this.products.splice(index, 1);
    this.updateItemCount();
  }

  getItems(): ProductView[] {
    return this.products;
  }

  sumCalc(): number {
    this.products.map(({ price, amount }) =>
      console.log(price + ' * ' + amount)
    );

    return 0;
  }

  clearCart() {
    this.products = [];
  }

  private updateItemCount(): void {
    this.itemCount.next(this.products.length);
  }
}
