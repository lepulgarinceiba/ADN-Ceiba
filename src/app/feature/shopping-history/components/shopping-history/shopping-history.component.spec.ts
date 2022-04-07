import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";
import { SharedModule } from "@shared/shared.module";
import { SharedPrimeNGModule } from "@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module";

import { ShoppingHistoryComponent } from "./shopping-history.component";

describe("ShoppingHistoryComponent", () => {
  let component: ShoppingHistoryComponent;
  let fixture: ComponentFixture<ShoppingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingHistoryComponent],
      imports: [CommonModule, SharedModule, SharedPrimeNGModule],
      providers: [HttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
