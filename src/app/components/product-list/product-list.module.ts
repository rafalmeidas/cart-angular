import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardModule } from '../product-card/product-card.module';
import { AlertModule } from '../alert/alert.module';

import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
  imports: [CommonModule, ProductCardModule, AlertModule],
})
export class ProductListModule {}
