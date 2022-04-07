import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductsListRoutingModule } from "./products-list-routing.module";

@NgModule({
  declarations: [ProductsListComponent],
  imports: [ProductsListRoutingModule, CommonModule, SharedModule],
})
export class ProductsListModule {}
