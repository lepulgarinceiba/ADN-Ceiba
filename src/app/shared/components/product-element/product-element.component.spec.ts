import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { SharedPrimeNGModule } from '@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng-lts/api';
import { ProductElementComponent } from './product-element.component';

describe('ProductElementComponent', () => {
  let component: ProductElementComponent;
  let fixture: ComponentFixture<ProductElementComponent>;
  let ngxCookieService: CookieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductElementComponent],
      imports: [SharedModule, SharedPrimeNGModule],
      providers: [CookieService, MessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductElementComponent);
    component = fixture.componentInstance;
    ngxCookieService = TestBed.inject(CookieService);
    ngxCookieService.deleteAll();
    fixture.detectChanges();
  });

  it('should create product element', () => {
    expect(component).toBeTruthy();
  });
});
