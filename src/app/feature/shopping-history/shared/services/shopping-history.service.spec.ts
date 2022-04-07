import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";

import { ShoppingHistoryService } from "./shopping-history.service";

describe("ShoppingHistoryService", () => {
  let httpMock: HttpTestingController;
  let service: ShoppingHistoryService;
  const apiEndpointShoppingHistory = `${environment.endpoint}shopping-history`;
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
    expect(shoppingHistoryService).toBeTruthy();
  });

  it("should get shopping history", () => {
    service.getShoppingHistory().subscribe((result) => {
      expect(result.length).toBe(0);
    });
    const req = httpMock.expectOne(apiEndpointShoppingHistory);
    expect(req.request.method).toBe("GET");
    req.flush([]);
  });
});
