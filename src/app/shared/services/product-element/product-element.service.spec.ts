import { TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng-lts/api';
import { CookiesService } from '../cookies/cookie.service';

import { ProductElementService } from './product-element.service';

describe('ProductElementService', () => {
  let service: ProductElementService;
  let cookiesService: CookiesService;
  let cookieService: CookieService;
  const product = {
    id: 1,
    description: 'Producto 1',
    price: 100,
    type: 'electronics' as const,
    image: 'image',
    buyQuantity: 1,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookiesService, ProductElementService, MessageService],
    });
    service = TestBed.inject(ProductElementService);
    cookieService = TestBed.inject(CookieService);
    cookiesService = TestBed.inject(CookiesService);
    cookieService.deleteAll();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should add product to cart saving it in cookies', () => {
    service.addToCart(product);
    const cookieStorage = cookiesService.getValue('cart');
    expect(JSON.parse(cookieStorage)[0]).toEqual(product);
  });

  it('should add product quantity if product is already in cart', () => {
    service.addToCart(product);
    service.addToCart(product);
    const cookieStorage = cookiesService.getValue('cart');
    expect(JSON.parse(cookieStorage)[0].buyQuantity).toEqual(2);
  });
});
