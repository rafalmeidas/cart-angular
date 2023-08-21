import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductListModule } from 'src/app/components/product-list/product-list.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ProductListModule],
})
export class HomeModule {}
