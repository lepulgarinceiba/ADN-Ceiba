import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingHistoryComponent } from "./components/shopping-history/shopping-history.component";
import { ShoppingHistoryRoutingModule } from "./shopping-history-routing.module";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [ShoppingHistoryComponent],
  imports: [ShoppingHistoryRoutingModule, CommonModule, SharedModule],
})
export class ShoppingHistoryModule {}
