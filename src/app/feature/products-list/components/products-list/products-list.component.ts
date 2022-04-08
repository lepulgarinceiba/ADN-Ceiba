import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@products-list/shared/services/products.service';
import { Product } from '@shared/interfaces/products-interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass'],
})
export class ProductsListComponent implements OnInit {
  constructor(private _productsService: ProductsService) {}

  public productsList$: Observable<Product[]>;
  public loadingProductsList = false;
  ngOnInit(): void {
    this.getProductsList();
  }

  /**
   * this method is used to get the products list
   */
  public getProductsList() {
    this.loadingProductsList = true;
    this.productsList$ = this._productsService
      .getProducts()
      .pipe(tap(() => (this.loadingProductsList = false)));
  }
}
