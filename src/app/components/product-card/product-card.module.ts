import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ProductCardComponent } from './product-card.component';

@NgModule({
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class ProductCardModule {}
