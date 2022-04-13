import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-data',
  templateUrl: './checkout-data.component.html',
  styleUrls: ['./checkout-data.component.sass'],
})
export class CheckoutDataComponent implements OnInit {
  @Output() finishCheckout = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  public checkoutDataForm: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
  });
  ngOnInit(): void {}

  checkout() {
    if (this.checkoutDataForm.valid) {
      this.finishCheckout.emit();
    } else {
      this.checkoutDataForm.markAllAsTouched();
    }
  }

  checkFormFieldsValidity(field) {
    return (
      this.checkoutDataForm.get(field).invalid &&
      this.checkoutDataForm.get(field).touched
    );
  }
}
