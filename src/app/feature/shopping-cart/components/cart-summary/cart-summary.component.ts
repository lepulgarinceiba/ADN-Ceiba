import {
  Component,
  DoCheck,
  Input,
  IterableDiffers,
  OnInit,
} from "@angular/core";
import { Product } from "@shared/interfaces/products-interface";

@Component({
  selector: "app-cart-summary",
  templateUrl: "./cart-summary.component.html",
  styleUrls: ["./cart-summary.component.sass"],
})
export class CartSummaryComponent implements OnInit, DoCheck {
  @Input() productsOnCart: Product[] = [];

  constructor(_iterableDiffers: IterableDiffers) {
    this._iterableDiffer = _iterableDiffers;
  }
  private _iterableDiffer: IterableDiffers;
  private todayDate: Date = new Date("2022/04/03");

  public shippingPrice: number = 4000;
  public subTotalPrice: number = 0;
  public discount: number = 0;

  public plusShipping: boolean = false;

  ngOnInit(): void {
    console.log(this.todayDate.getDay());
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
    let subTotalPrice: number = 0;
    this.productsOnCart.forEach((product: Product) => {
      subTotalPrice += product.price * product.buyQuantity;
    });
    this.subTotalPrice = subTotalPrice;
  }
}
