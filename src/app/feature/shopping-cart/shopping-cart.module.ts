import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartProductElementComponent } from './components/cart-product-element/cart-product-element.component';
import { SharedPrimeNGModule } from '@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module';
import { FormsModule } from '@angular/forms';
import { CartSummaryService } from './shared/services/cart-summary/cart-summary.service';
import { CheckoutDataComponent } from './components/checkout-data/checkout-data.component';
import { MessageService } from 'primeng-lts/api';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    CartSummaryComponent,
    CartProductElementComponent,
    CheckoutDataComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    SharedModule,
    SharedPrimeNGModule,
    FormsModule,
  ],
  providers: [CartSummaryService, MessageService],
})
export class ShoppingCartModule {}
