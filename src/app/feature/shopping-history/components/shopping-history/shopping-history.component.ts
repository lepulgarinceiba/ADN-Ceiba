import { Component, OnInit } from "@angular/core";
import { Product } from "@shared/interfaces/products-interface";
import { ShoppingHistoryService } from "@shopping-history/shared/services/shopping-history.service";

@Component({
  selector: "app-shopping-history",
  templateUrl: "./shopping-history.component.html",
  styleUrls: ["./shopping-history.component.sass"],
})
export class ShoppingHistoryComponent implements OnInit {
  constructor(private _shoppingHistoryService: ShoppingHistoryService) {}

  public shoppingHistory: Product[] = [];

  ngOnInit(): void {
    this.getShoppingHistory();
  }

  getShoppingHistory() {
    this._shoppingHistoryService
      .getShoppingHistory()
      .subscribe((shoppingHistory) => {
        this.shoppingHistory = shoppingHistory;
      });
  }
}
