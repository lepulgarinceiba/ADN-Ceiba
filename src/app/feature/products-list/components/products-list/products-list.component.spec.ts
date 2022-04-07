import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";
import { SharedModule } from "@shared/shared.module";

import { ProductsListComponent } from "./products-list.component";

describe("ProductsListComponent", () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [SharedModule],
      providers: [HttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    component.productsList$.subscribe((resultado) => {
      expect(0).toBe(resultado.length);
    });
  });
});
