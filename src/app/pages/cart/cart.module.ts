import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartListModule } from 'src/app/components/cart-list/cart-list.module';

import { CartComponent } from './cart.component';

const routes: Routes = [{ path: '', component: CartComponent }];

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartListModule, RouterModule.forChild(routes)],
})
export class CartModule {}
