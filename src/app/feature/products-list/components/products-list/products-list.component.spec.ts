import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ProductsService } from '@products-list/shared/services/products.service';
import { SharedModule } from '@shared/shared.module';
import { SharedPrimeNGModule } from '@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module';
import { MessageService } from 'primeng-lts/api';
import { of } from 'rxjs';

import { ProductsListComponent } from './products-list.component';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let productsService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [
        CommonModule,
        SharedModule,
        SharedPrimeNGModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [ProductsService, HttpService, MessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    productsService = TestBed.inject(ProductsService);
    spyOn(productsService, 'getProducts').and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create products list component', () => {
    expect(component).toBeTruthy();
  });

  it('should load products list', () => {
    component.productsList$.subscribe((resultado) => {
      expect(0).toBe(resultado.length);
    });
  });
});
