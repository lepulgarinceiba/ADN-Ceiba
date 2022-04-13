import { by, element } from 'protractor';

export class NavbarPage {
  linkListaProductos = element(by.id('productList'));
  linkHistorialCompras = element(by.id('shoppingHistory'));
  linkCarritoCompras = element(by.id('shoppingCart'));

  async clickListaProductos() {
    await this.linkListaProductos.click();
  }

  async clickHistorialCompras() {
    await this.linkHistorialCompras.click();
  }
  async clickCarritoCompras() {
    await this.linkCarritoCompras.click();
  }
}
