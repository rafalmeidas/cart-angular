import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { CartListModule } from '../components/cart-list/cart-list.module';
import { CartModule } from '../components/cart/cart.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [ToolbarComponent, MainComponent],
  exports: [ToolbarComponent, MainComponent],
  imports: [
    CommonModule,
    CartModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    CartListModule,
  ],
})
export class TemplatesModule {}
