import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let httpMock: HttpTestingController;
  let service: ProductsService;
  const apiEndpointProducts = `${environment.endpoint}products`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService, HttpService],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    const productService: ProductsService = TestBed.inject(ProductsService);
    expect(productService).toBeTruthy();
  });

  it('should get products', () => {
    service.getProducts().subscribe((result) => {
      expect(result.length).toBe(0);
    });
    const req = httpMock.expectOne(apiEndpointProducts);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });
});
