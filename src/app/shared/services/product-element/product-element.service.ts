import { Injectable } from '@angular/core';
import { Product } from '@shared/interfaces/products-interface';
import { MessageService } from 'primeng-lts/api';
import { CookiesService } from '../cookies/cookie.service';

@Injectable()
export class ProductElementService {
  constructor(
    private _cookieService: CookiesService,
    private _messageService: MessageService
  ) {}

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
