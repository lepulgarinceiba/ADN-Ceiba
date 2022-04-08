import {
  Component,
  DoCheck,
  Input,
  IterableDiffers,
  OnInit,
} from '@angular/core';
import { Product } from '@shared/interfaces/products-interface';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.sass'],
})
export class CartSummaryComponent implements OnInit, DoCheck {
  @Input() productsOnCart: Product[] = [];

  constructor(_iterableDiffers: IterableDiffers) {
    this._iterableDiffer = _iterableDiffers;
  }
  private _iterableDiffer: IterableDiffers;
  private _todayDate: Date = new Date('2022/04/03');

  public shippingPrice = 4000;
  public subTotalPrice = 0;
  public discount = 0;

  public plusShipping = false;

  ngOnInit(): void {
    console.log(this._todayDate.getDay());
  }

  ngDoCheck(): void {
    const changes = this._iterableDiffer.find(this.productsOnCart ?? []);
    if (changes) {
      this.getSubTotalPrice();
    }
  }

  /**
   * this method calculates the subtotal price of the products on cart
   */
  public getSubTotalPrice() {
    let subTotalPrice = 0;
    this.productsOnCart.forEach((product: Product) => {
      subTotalPrice += product.price * product.buyQuantity;
    });
    this.subTotalPrice = subTotalPrice;
  }
}
