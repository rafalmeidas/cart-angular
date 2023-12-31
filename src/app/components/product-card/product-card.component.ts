import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ProductView } from '../../types/product-view.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() label: string = 'Label';
  @Input() product!: ProductView;
  @Input() showInput: boolean = false;
  @Output() onAddCart: EventEmitter<ProductView> =
    new EventEmitter<ProductView>();
  @Output() onUpdateAmount: EventEmitter<ProductView> =
    new EventEmitter<ProductView>();

  onEmit() {
    this.onAddCart.emit(this.product);
  }

  addAmount() {
    this.product.amount = this.product.amount + 1;
  }

  removeAmount() {
    this.product.amount = this.product.amount - 1;
  }
}
