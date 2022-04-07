import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";

import { ProductsService } from "./products.service";

describe("ProductsService", () => {
  let httpMock: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService, HttpService],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it("should be created", () => {
    const productService: ProductsService = TestBed.inject(ProductsService);
    console.log(httpMock, service);

    expect(productService).toBeTruthy();
  });
});
