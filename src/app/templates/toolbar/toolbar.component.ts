import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  count: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.itemCount.subscribe((count) => (this.count = count));
  }

  public isCountZero(): boolean {
    return this.count === 0;
  }
}
