import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductService } from 'src/app/services/product/product.service';
import { CartService } from 'src/app/services/cart/cart.service';

import { ProductView } from '../../types/product-view.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: ProductView[] = [];
  isProcessing: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loadApi();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private loadApi() {
    this.isProcessing = true;
    const subscription = this.productService.getProducts().subscribe({
      next: (data) =>
        (this.products = data.map((product) => ({ ...product, amount: 1 }))),
      error: () => (this.isProcessing = false),
      complete: () => (this.isProcessing = false),
    });

    this.subscriptions.push(subscription);
  }

  addToCart(item: ProductView) {
    this.cartService.addToCart(item);
    item.amount = 1;
  }
}
