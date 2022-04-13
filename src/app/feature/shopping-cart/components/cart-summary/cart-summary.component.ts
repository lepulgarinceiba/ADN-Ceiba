import { Component, DoCheck, Input, IterableDiffers } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '@shared/interfaces/products-interface';
import { CartSummaryService } from '@shopping-cart/shared/services/cart-summary/cart-summary.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.sass'],
  providers: [CartSummaryService],
})
export class CartSummaryComponent implements DoCheck {
  @Input() productsOnCart: Product[] = [];

  constructor(
    _iterableDiffers: IterableDiffers,
    private _cartSummaryService: CartSummaryService,
    private fb: FormBuilder
  ) {
    this._iterableDiffer = _iterableDiffers;
  }
  private _iterableDiffer: IterableDiffers;
  public plusShipping = false;
  public plusShippingDateForm: FormGroup = this.fb.group({
    shippingDate: [{ value: '', disabled: true }, Validators.required],
  });

  ngDoCheck(): void {
    const changes = this._iterableDiffer.find(this.productsOnCart);
    if (changes) {
      this._cartSummaryService.calculateSubTotalPrice(this.productsOnCart);
      this._cartSummaryService.calculateShippingPricesAndDiscounts(
        this.plusShipping
      );
    }
  }

  public getPrices() {
    return this._cartSummaryService.getPrices();
  }

  public getShippingDates() {
    return this._cartSummaryService.getShippingDates();
  }

  public onPlusShippingCheckChanged() {
    this.plusShipping
      ? this.plusShippingDateForm.controls.shippingDate.enable()
      : this.plusShippingDateForm.controls.shippingDate.disable();
  }
}
