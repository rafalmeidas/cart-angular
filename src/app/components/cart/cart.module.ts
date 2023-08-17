import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent],
  exports: [CartComponent],
  imports: [CommonModule, MatCardModule, FormsModule, MatButtonModule],
})
export class CartModule {}
