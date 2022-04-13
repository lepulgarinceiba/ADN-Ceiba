import { by, element } from 'protractor';

export class HistorialCompras {
  private tituloHistorialCompras = element(by.css('h1'));
  private listaProductos = element.all(by.className('product-container'));

  async obtenerTituloHistorialCompras() {
    return await this.tituloHistorialCompras.getText();
  }

  async contarProductos() {
    return await this.listaProductos.count();
  }
}
