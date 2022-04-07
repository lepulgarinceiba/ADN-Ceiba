import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpService } from "@core/services/http.service";
import { SharedModule } from "@shared/shared.module";
import { SharedPrimeNGModule } from "@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module";
import { ShoppingHistoryService } from "@shopping-history/shared/services/shopping-history.service";
import { of } from "rxjs";

import { ShoppingHistoryComponent } from "./shopping-history.component";

describe("ShoppingHistoryComponent", () => {
  let component: ShoppingHistoryComponent;
  let fixture: ComponentFixture<ShoppingHistoryComponent>;
  let shoppingHistoryService: ShoppingHistoryService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingHistoryComponent],
      imports: [
        CommonModule,
        SharedModule,
        SharedPrimeNGModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [ShoppingHistoryService, HttpService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingHistoryComponent);
    component = fixture.componentInstance;
    shoppingHistoryService = TestBed.inject(ShoppingHistoryService);
    spyOn(shoppingHistoryService, "getShoppingHistory").and.returnValue(of([]));
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    component.shoppingHistory$.subscribe((resultado) => {
      expect(0).toBe(resultado.length);
    });
  });
});
