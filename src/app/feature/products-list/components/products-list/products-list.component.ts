import { Component, OnInit } from "@angular/core";
import { ProductsService } from "@products-list/shared/services/products.service";
import { Product } from "@shared/interfaces/products-interface";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.sass"],
})
export class ProductsListComponent implements OnInit {
  constructor(private _productsService: ProductsService) {
    this.getProductsList();
  }

  public productsList: Product[] = [];

  ngOnInit(): void {}

  /**
   * this method is used to get the products list
   */
  public getProductsList() {
    this._productsService.getProducts().subscribe((products: Product[]) => {
      this.productsList = products;
    });
  }
}
