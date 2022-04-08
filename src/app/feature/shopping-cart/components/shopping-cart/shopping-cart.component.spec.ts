import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CookiesService } from '@shared/services/cookies/cookie.service';
import { SharedModule } from '@shared/shared.module';
import { SharedPrimeNGModule } from '@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module';
import { CartProductElementComponent } from '../cart-product-element/cart-product-element.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';

import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  let cookiesService: CookiesService;
  const product = {
    id: 1,
    description: 'Producto 1',
    price: 100,
    type: 'electronics' as const,
    image: 'image',
    buyQuantity: 1,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShoppingCartComponent,
        CartSummaryComponent,
        CartProductElementComponent,
      ],
      imports: [CommonModule, SharedModule, SharedPrimeNGModule],
      providers: [CookiesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    cookiesService = TestBed.inject(CookiesService);
    cookiesService.setValue('cart', JSON.stringify([product]));
    fixture.detectChanges();
  });

  it('should create shopping cart component', () => {
    expect(component).toBeTruthy();
    expect(component.productsOnCart.length).toBe(1);
  });

  it('should remove product from cart', () => {
    component.removeProductFromCart(product);
    const cookieStorage = JSON.parse(cookiesService.getValue('cart'));
    expect(component.productsOnCart.length).toBe(0);
    expect(cookieStorage.length).toBe(0);
  });
});
