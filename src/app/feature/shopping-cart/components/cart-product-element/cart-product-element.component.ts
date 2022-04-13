import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import productType from '@shared/dictionaries/product-type';
import { Product } from '@shared/interfaces/products-interface';

@Component({
  selector: 'app-cart-product-element',
  templateUrl: './cart-product-element.component.html',
  styleUrls: ['./cart-product-element.component.sass'],
})
export class CartProductElementComponent implements OnInit {
  @Input() product: Product;
  @Output() quantityChanged = new EventEmitter();
  @Output() removeFromCart = new EventEmitter<Product>();
  constructor() {}

  public productTypeDictionary: Map<string, string> = productType;

  ngOnInit(): void {}

  public emitQuantityChanged() {
    this.quantityChanged.emit();
  }

  public emitRemoveFromCart() {
    this.removeFromCart.emit(this.product);
  }
}
