import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';
import { Product } from '../../interfaces/products-interface';
import productType from '../../dictionaries/product-type';
import { CookiesService } from '@shared/services/cookies/cookie.service';

@Component({
  selector: 'app-product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.sass'],
  providers: [MessageService],
})
export class ProductElementComponent implements OnInit {
  @Input() product: Product;
  @Input() isHistoryProduct = false;
  constructor(
    private _cookieService: CookiesService,
    private _messageService: MessageService
  ) {}

  public productTypeDictionary: Map<string, string> = productType;

  ngOnInit(): void {}

  /**
   * this method is called when the user clicks on the add to chart button
   * and saves in cookies the product that the user wants to add to the chart
   * @param product is the product that the user wants to add to the chart
   */
  public addToCart(product: Product) {
    try {
      const storedProducts: Product[] = JSON.parse(
        this._cookieService.getValue('cart') || '[]'
      );
      this.searchProductExistence(product, storedProducts);
      this._cookieService.setValue('cart', JSON.stringify(storedProducts));
      this._messageService.add({
        severity: 'success',
        summary: 'Producto agregado al carrito',
      });
    } catch (error) {
      this._messageService.add({
        severity: 'error',
        summary: 'Error al agregar el producto al carrito',
      });
    }
  }

  /**
   * this method are used to search if the product that the user wants to add exists in the cart
   * @param product is the product that the user wants to add to the chart
   * @param storedProducts is the array of products that the user has in the chart
   * @returns void
   */
  public searchProductExistence(product: Product, storedProducts: Product[]) {
    const productExistenceIndex: number = storedProducts.findIndex(
      (productElement: Product) => {
        return productElement.id === product.id;
      }
    );
    if (productExistenceIndex !== -1) {
      storedProducts[productExistenceIndex].buyQuantity++;
      return;
    }
    product.buyQuantity = 1;
    storedProducts.push(product);
  }
}
