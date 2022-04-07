import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SharedModule } from "@shared/shared.module";
import { SharedPrimeNGModule } from "@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module";
import { CartSummaryComponent } from "../cart-summary/cart-summary.component";

import { ShoppingCartComponent } from "./shopping-cart.component";

describe("ShoppingCartComponent", () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent, CartSummaryComponent],
      imports: [CommonModule, SharedModule, SharedPrimeNGModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
