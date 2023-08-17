import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardModule } from '../product-card/product-card.module';

import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
  imports: [CommonModule, ProductCardModule],
})
export class ProductListModule {}
