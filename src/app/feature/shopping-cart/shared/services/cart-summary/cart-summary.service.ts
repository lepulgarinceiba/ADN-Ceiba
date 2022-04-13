import { Injectable } from '@angular/core';
import { Product } from '@shared/interfaces/products-interface';

const SHIPPING_PRICE = 4000;
const PLUS_SHIPPING_PRICE = 10000;
const SUB_TOTAL_RANGE_FOR_DISCOUNT = 150000;
@Injectable()
export class CartSummaryService {
  constructor() {
    this._shippingPrice = SHIPPING_PRICE;
    this._plusShippingPrice = PLUS_SHIPPING_PRICE;
    this._subTotalPrice = 0;
    this._discount = 0;
    this._shippingStartDate = this.calculateShippingDates(
      new Date(this._todayDate)
    );
    this._shippingEndDate = this.calculateShippingDates(
      new Date(this._shippingStartDate)
    );
    this._minShippingDate = this._shippingStartDate;
  }

  private _holidays = [
    '01/01',
    '01/11',
    '03/22',
    '04/14',
    '04/15',
    '05/01',
    '05/30',
    '06/20',
    '06/27',
    '07/04',
    '07/20',
    '08/07',
    '08/15',
    '10/17',
    '11/07',
    '11/15',
    '12/08',
    '12/25',
  ];
  public _todayDate = new Date();

  private _shippingPrice: number;
  private _plusShippingPrice: number;
  private _subTotalPrice: number;
  private _discount: number;
  private _shippingStartDate: Date;
  private _shippingEndDate: Date;
  private _minShippingDate: Date;

  public calculateSubTotalPrice(productsOnCart: Product[]) {
    let subTotalPrice = 0;
    productsOnCart.forEach((product: Product) => {
      subTotalPrice += product.price * product.buyQuantity;
    });
    this._subTotalPrice = subTotalPrice;
    this._calculateSubTotalDiscount();
  }

  public calculateShippingDates(date: Date) {
    let shippingDate = date;
    const cicleTimes = 3;
    Array.from(Array(cicleTimes)).forEach(() => {
      shippingDate = this._nextBusinessDay(new Date(shippingDate));
    });
    return shippingDate;
  }

  private _calculateSubTotalDiscount() {
    const endOfMonth = new Date(this._todayDate);
    endOfMonth.setMonth(endOfMonth.getMonth() + 1);
    endOfMonth.setDate(0);
    const rangeForDiscount = 5;
    const discountPercentage = 0.1;
    if (
      this._todayDate.getDate() > endOfMonth.getDate() - rangeForDiscount &&
      this._todayDate.getDate() < endOfMonth.getDate()
    ) {
      this._discount = this._subTotalPrice * discountPercentage;
    }
  }
  public calculateAllShippingDates() {
    this._shippingStartDate = this.calculateShippingDates(
      new Date(this._todayDate)
    );
    this._shippingEndDate = this.calculateShippingDates(
      new Date(this._shippingStartDate)
    );
    this._minShippingDate = this._shippingStartDate;
  }

  public calculateShippingPricesAndDiscounts(plusShipping: boolean) {
    if (this._subTotalPrice > SUB_TOTAL_RANGE_FOR_DISCOUNT) {
      this._shippingPrice = 0;
      if (plusShipping) {
        this._plusShippingPrice =
          PLUS_SHIPPING_PRICE - PLUS_SHIPPING_PRICE * 0.3;
      } else {
        this._plusShippingPrice = 0;
      }
    } else {
      this._shippingPrice = SHIPPING_PRICE;
      if (plusShipping) {
        this._plusShippingPrice = PLUS_SHIPPING_PRICE;
      } else {
        this._plusShippingPrice = 0;
      }
    }
  }

  private _nextBusinessDay(date: Date) {
    date.setDate(date.getDate() + 1);
    const operator = 6;
    if (
      date.getDay() % operator === 0 ||
      this._holidays.includes(
        `${('0' + (date.getMonth() + 1)).slice(-2)}/${(
          '0' + date.getDate()
        ).slice(-2)}`
      )
    ) {
      return this._nextBusinessDay(new Date(date.setDate(date.getDate() + 1)));
    } else {
      return date;
    }
  }

  public getPrices() {
    return {
      shippingPrice: this._shippingPrice + this._plusShippingPrice,
      subTotalPrice: this._subTotalPrice,
      discount: this._discount,
    };
  }

  public getShippingDates() {
    return {
      shippingStartDate: this._shippingStartDate,
      shippingEndDate: this._shippingEndDate,
      minShippingDate: this._minShippingDate,
    };
  }
}
