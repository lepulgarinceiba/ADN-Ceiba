import { Component, OnInit } from '@angular/core';
import { Product } from '@shared/interfaces/products-interface';
import { CookiesService } from '@shared/services/cookies/cookie.service';
import { MessageService } from 'primeng-lts/api';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(
    private _cookieService: CookiesService,
    private _messageService: MessageService
  ) {
    this.showCartCheckoutData = false;
  }

  public productsOnCart: Product[] = [];
  public showCartCheckoutData: boolean;

  ngOnInit(): void {
    this.loadCartFromCookie();
  }

  public loadCartFromCookie() {
    this.productsOnCart = JSON.parse(
      this._cookieService.getValue('cart') || '[]'
    );
  }

  public changeProductQuantity() {
    this._cookieService.setValue('cart', JSON.stringify(this.productsOnCart));
  }

  public removeProductFromCart(product: Product) {
    this.productsOnCart = this.productsOnCart.filter(
      (p) => p.id !== product.id
    );
    this._cookieService.setValue('cart', JSON.stringify(this.productsOnCart));
  }

  public showCheckoutData() {
    this.showCartCheckoutData = true;
  }

  public finishCheckout() {
    this.showCartCheckoutData = false;
    this.productsOnCart = [];
    this._cookieService.setValue('cart', JSON.stringify(this.productsOnCart));
    this._messageService.add({
      severity: 'success',
      summary: '¡Gracias por tu compra!',
      detail: 'Tu orden se ha completado exitosamente.',
    });
  }
}
