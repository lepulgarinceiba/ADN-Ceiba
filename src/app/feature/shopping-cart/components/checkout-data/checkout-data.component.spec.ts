import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CheckoutDataComponent } from './checkout-data.component';

describe('CheckoutDataComponent', () => {
  let component: CheckoutDataComponent;
  let fixture: ComponentFixture<CheckoutDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutDataComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create checkout component', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid fullName field', () => {
    component.checkoutDataForm.controls.fullName.setValue('');
    component.checkoutDataForm.controls.fullName.markAsTouched();
    expect(component.checkFormFieldsValidity('fullName')).toBeTruthy();
  });

  it('should return invalid email field', () => {
    component.checkoutDataForm.controls.email.setValue('');
    component.checkoutDataForm.controls.email.markAsTouched();
    expect(component.checkFormFieldsValidity('email')).toBeTruthy();
  });

  it('should return invalid address field', () => {
    component.checkoutDataForm.controls.address.setValue('');
    component.checkoutDataForm.controls.address.markAsTouched();
    expect(component.checkFormFieldsValidity('address')).toBeTruthy();
  });

  it('should return valid fullName field', () => {
    component.checkoutDataForm.controls.fullName.setValue('test');
    component.checkoutDataForm.controls.fullName.markAsTouched();
    expect(component.checkFormFieldsValidity('fullName')).toBeFalsy();
  });

  it('should return valid email field', () => {
    component.checkoutDataForm.controls.email.setValue('test@test.com');
    component.checkoutDataForm.controls.email.markAsTouched();
    expect(component.checkFormFieldsValidity('email')).toBeFalsy();
  });

  it('should return valid address field', () => {
    component.checkoutDataForm.controls.address.setValue('test');
    component.checkoutDataForm.controls.address.markAsTouched();
    expect(component.checkFormFieldsValidity('address')).toBeFalsy();
  });
});
