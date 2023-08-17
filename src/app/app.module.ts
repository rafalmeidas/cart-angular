import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ProductListModule } from './components/product-list/product-list.module';
import { TemplatesModule } from './templates/templates.module';
import { CartModule } from './components/cart/cart.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TemplatesModule,
    CartModule,
    ProductListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
