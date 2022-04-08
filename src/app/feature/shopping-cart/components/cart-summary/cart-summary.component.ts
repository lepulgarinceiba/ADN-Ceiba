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
    this.shippingPrice = 4000;
    this.subTotalPrice = 0;
    this.discount = 0;
    this.shippingStartDate = this._calculateShippingDates(
      new Date(this._todayDate.getTime())
    );
    this.shippingEndDate = this._calculateShippingDates(
      new Date(this.shippingStartDate.getTime())
    );
  }
  private _iterableDiffer: IterableDiffers;
  private _todayDate: Date = new Date('2022/04/07');
  private _holidays = [
    '01/01',
    '01/11',
    '03/22',
    '04/02',
    '04/02',
    '05/01',
    '05/09',
    '05/17',
    '06/07',
    '06/14',
    '07/05',
    '07/20',
    '08/07',
    '08/16',
    '09/07',
    '09/16',
    '10/18',
    '11/01',
    '11/15',
    '12/25',
  ];

  public shippingPrice: number;
  public subTotalPrice: number;
  public discount: number;
  public shippingStartDate: Date;
  public shippingEndDate: Date;

  public plusShipping = false;

  ngOnInit(): void {}

  ngDoCheck(): void {
    const changes = this._iterableDiffer.find(this.productsOnCart ?? []);
    if (changes) {
      this._getSubTotalPrice();
    }
  }

  /**
   * this method calculates the subtotal price of the products on cart
   */
  private _getSubTotalPrice() {
    let subTotalPrice = 0;
    this.productsOnCart.forEach((product: Product) => {
      subTotalPrice += product.price * product.buyQuantity;
    });
    this.subTotalPrice = subTotalPrice;
  }

  private _calculateShippingDates(date: Date) {
    let shippingDate = date;
    const cicleTimes = 3;
    Array.from(Array(cicleTimes)).forEach(() => {
      shippingDate = this._nextBusinessDay(shippingDate);
    });
    return shippingDate;
  }

  private _nextBusinessDay(date: Date) {
    date.setDate(date.getDate() + 1);
    const operator = 6;
    if (
      date.getDay() % operator === 0 ||
      this._holidays.includes(`${date.getMonth() + 1}/${date.getDate()}`)
    ) {
      return this._nextBusinessDay(new Date(date.setDate(date.getDate() + 1)));
    } else {
      return date;
    }
  }
}
