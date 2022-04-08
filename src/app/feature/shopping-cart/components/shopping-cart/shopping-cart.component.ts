import { Component, OnInit } from '@angular/core';
import { Product } from '@shared/interfaces/products-interface';
import { CookiesService } from '@shared/services/cookies/cookie.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(private _cookieService: CookiesService) {}

  public productsOnCart: Product[] = [];

  ngOnInit(): void {
    this.loadCartFromCookie();
  }

  /**
   * this method is used to load the products that the user has in the cart
   */
  public loadCartFromCookie() {
    this.productsOnCart = JSON.parse(
      this._cookieService.getValue('cart') || '[]'
    );
  }
  /**
   * this method is used to change the quantity of the product that user
   * has in the cart
   */
  public changeProductQuantity() {
    this._cookieService.setValue('cart', JSON.stringify(this.productsOnCart));
  }

  /**
   * this method is used to remove the product that the user has in the cart
   * @param product is the product that the user wants to remove from the chart
   */
  public removeProductFromCart(product: Product) {
    this.productsOnCart = this.productsOnCart.filter(
      (p) => p.id !== product.id
    );
    this._cookieService.setValue('cart', JSON.stringify(this.productsOnCart));
  }
}
