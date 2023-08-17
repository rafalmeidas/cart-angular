import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartListComponent } from './cart-list.component';

@NgModule({
  declarations: [CartListComponent],
  exports: [CartListComponent],
  imports: [CommonModule],
})
export class CartListModule {}
