import { Component, OnInit, OnDestroy } from "@angular/core";
import { CookiesService } from "@shared/services/cookies/cookie.service";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.sass"],
})
export class NavbarComponent implements OnInit, OnDestroy {
  constructor(private _cookieService: CookiesService) {}

  public cartItemsQuantity: number = 0;
  public sideBarVisible: boolean = false;

  ngOnInit() {
    this.getCartItemsQuantity();
  }

  ngOnDestroy(): void {
    this._cookieService.completeWatchCookie();
  }

  /**
   * this method gets the quantity of items in the cart and suscribes to the observable
   * that emits the quantity of items in the cart
   */
  public getCartItemsQuantity() {
    this.cartItemsQuantity = JSON.parse(
      this._cookieService.getValue("cart") || "[]"
    ).length;
    this._cookieService.watchCookie().subscribe((cart) => {
      this.cartItemsQuantity = JSON.parse(cart).length;
    });
  }
}
