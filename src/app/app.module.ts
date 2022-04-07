import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ProductoModule } from "@producto/producto.module";
import { CoreModule } from "@core/core.module";
import { CookieService } from "ngx-cookie-service";
import { ProductsListModule } from "@products-list/products-list.module";
import { ShoppingCartModule } from "./feature/shopping-cart/shopping-cart.module";
import { ShoppingHistoryModule } from "@shopping-history/shopping-history.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
    ProductsListModule,
    ShoppingCartModule,
    ShoppingHistoryModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
