import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';
import { SharedPrimeNGModule } from '@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module';
import { CartSummaryService } from '@shopping-cart/shared/services/cart-summary/cart-summary.service';
import { CheckoutDataComponent } from '../checkout-data/checkout-data.component';

import { CartSummaryComponent } from './cart-summary.component';

describe('CartSummaryComponent', () => {
  let component: CartSummaryComponent;
  let fixture: ComponentFixture<CartSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartSummaryComponent, CheckoutDataComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        CommonModule,
        SharedModule,
        SharedPrimeNGModule,
      ],
      providers: [CartSummaryService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create cart summary', () => {
    expect(component).toBeTruthy();
  });
});
