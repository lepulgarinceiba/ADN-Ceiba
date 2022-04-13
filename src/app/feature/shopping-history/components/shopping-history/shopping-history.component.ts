import { Component, OnInit } from '@angular/core';
import { Product } from '@shared/interfaces/products-interface';
import { ShoppingHistoryService } from '@shopping-history/shared/services/shopping-history.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.sass'],
})
export class ShoppingHistoryComponent implements OnInit {
  constructor(private _shoppingHistoryService: ShoppingHistoryService) {}

  public shoppingHistory$: Observable<Product[]>;
  public loadingShoppingHistory = false;

  ngOnInit(): void {
    this.getShoppingHistory();
  }

  public getShoppingHistory() {
    this.loadingShoppingHistory = true;
    this.shoppingHistory$ = this._shoppingHistoryService
      .getShoppingHistory()
      .pipe(tap(() => (this.loadingShoppingHistory = false)));
  }
}
