import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";

import { ShoppingHistoryService } from "./shopping-history.service";

describe("ShoppingHistoryService", () => {
  let httpMock: HttpTestingController;
  let service: ShoppingHistoryService;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShoppingHistoryService, HttpService],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ShoppingHistoryService);
  });

  it("should be created", () => {
    const shoppingHistoryService: ShoppingHistoryService = TestBed.inject(
      ShoppingHistoryService
    );
    console.log(httpMock, service);
    expect(shoppingHistoryService).toBeTruthy();
  });
});
