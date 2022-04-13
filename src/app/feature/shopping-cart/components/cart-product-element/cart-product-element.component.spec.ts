import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { SharedPrimeNGModule } from '@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module';
import { CartSummaryService } from '@shopping-cart/shared/services/cart-summary/cart-summary.service';
import { MessageService } from 'primeng-lts/api';

import { CartProductElementComponent } from './cart-product-element.component';

describe('CartProductElementComponent', () => {
  let component: CartProductElementComponent;
  let fixture: ComponentFixture<CartProductElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartProductElementComponent],
      imports: [SharedModule, SharedPrimeNGModule],
      providers: [CartSummaryService, MessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
