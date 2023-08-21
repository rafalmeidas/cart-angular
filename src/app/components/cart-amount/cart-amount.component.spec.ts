import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAmountComponent } from './cart-amount.component';

describe('CartAmountComponent', () => {
  let component: CartAmountComponent;
  let fixture: ComponentFixture<CartAmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartAmountComponent]
    });
    fixture = TestBed.createComponent(CartAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
