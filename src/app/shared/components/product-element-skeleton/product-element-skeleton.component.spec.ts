import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedPrimeNGModule } from '@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module';

import { ProductElementSkeletonComponent } from './product-element-skeleton.component';

describe('ProductElementSkeletonComponent', () => {
  let component: ProductElementSkeletonComponent;
  let fixture: ComponentFixture<ProductElementSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductElementSkeletonComponent],
      imports: [SharedPrimeNGModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductElementSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
