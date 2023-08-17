import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductService } from 'src/app/services/product/product.service';
import { CartService } from 'src/app/services/cart/cart.service';

import { Cart } from 'src/app/models/cart.model';

import { ProductView } from './types';

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

  loadApi() {
    this.isProcessing = true;
    const subscription = this.productService.getProducts().subscribe({
      next: (data) =>
        (this.products = data.map((product) => ({ ...product, amount: 1 }))),
      error: (error) =>
        console.error('Erro ao obter os produtos da API falsa:', error),
      complete: () => (this.isProcessing = false),
    });

    this.subscriptions.push(subscription);
  }

  ngOnInit() {
    this.loadApi();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  addToCart(item: ProductView) {
    const cartItem: Cart = { product: item, amount: item.amount };
    this.cartService.addToCart(cartItem);
    item.amount = 1;
  }
}
