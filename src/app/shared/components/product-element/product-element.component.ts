import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products-interface';
import productType from '../../dictionaries/product-type';
import { ProductElementService } from '@shared/services/product-element/product-element.service';

@Component({
  selector: 'app-product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.sass'],
  providers: [ProductElementService],
})
export class ProductElementComponent implements OnInit {
  @Input() product: Product;
  @Input() isHistoryProduct = false;
  constructor(private _productElementService: ProductElementService) {}

  public productTypeDictionary: Map<string, string> = productType;

  ngOnInit(): void {}

  public addToCart(product: Product) {
    this._productElementService.addToCart(product);
  }
}
