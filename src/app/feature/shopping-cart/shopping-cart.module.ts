import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartProductElementComponent } from './components/cart-product-element/cart-product-element.component';
import { SharedPrimeNGModule } from '@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    CartSummaryComponent,
    CartProductElementComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    SharedModule,
    SharedPrimeNGModule,
  ],
})
export class ShoppingCartModule {}
