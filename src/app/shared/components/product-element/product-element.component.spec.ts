import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SharedModule } from "@shared/shared.module";
import { SharedPrimeNGModule } from "@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module";

import { ProductElementComponent } from "./product-element.component";

describe("ProductElementComponent", () => {
  let component: ProductElementComponent;
  let fixture: ComponentFixture<ProductElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductElementComponent],
      imports: [SharedModule, SharedPrimeNGModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
