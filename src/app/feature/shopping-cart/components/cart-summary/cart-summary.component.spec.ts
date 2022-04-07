import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "@shared/shared.module";
import { SharedPrimeNGModule } from "@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module";

import { CartSummaryComponent } from "./cart-summary.component";

describe("CartSummaryComponent", () => {
  let component: CartSummaryComponent;
  let fixture: ComponentFixture<CartSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartSummaryComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        CommonModule,
        SharedModule,
        SharedPrimeNGModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create cart summary", () => {
    expect(component).toBeTruthy();
  });
});
