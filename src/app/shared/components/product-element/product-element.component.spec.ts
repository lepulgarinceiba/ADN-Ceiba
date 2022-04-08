import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CookiesService } from '@shared/services/cookies/cookie.service';
import { SharedModule } from '@shared/shared.module';
import { SharedPrimeNGModule } from '@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module';
import { CookieService } from 'ngx-cookie-service';
import { ProductElementComponent } from './product-element.component';

describe('ProductElementComponent', () => {
  let component: ProductElementComponent;
  let fixture: ComponentFixture<ProductElementComponent>;
  let cookiesService: CookiesService;
  let ngxCookieService: CookieService;
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
      declarations: [ProductElementComponent],
      imports: [SharedModule, SharedPrimeNGModule],
      providers: [CookiesService, CookieService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductElementComponent);
    component = fixture.componentInstance;
    cookiesService = TestBed.inject(CookiesService);
    ngxCookieService = TestBed.inject(CookieService);
    ngxCookieService.deleteAll();
    fixture.detectChanges();
  });

  it('should create product element', () => {
    expect(component).toBeTruthy();
  });

  it('Should add product to cart saving it in cookies', () => {
    component.addToCart(product);
    const cookieStorage = cookiesService.getValue('cart');
    expect(JSON.parse(cookieStorage)[0]).toEqual(product);
  });

  it('should add product quantity if product is already in cart', () => {
    component.addToCart(product);
    component.addToCart(product);
    const cookieStorage = cookiesService.getValue('cart');
    expect(JSON.parse(cookieStorage)[0].buyQuantity).toEqual(2);
  });
});
