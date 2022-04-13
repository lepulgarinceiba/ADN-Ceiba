import { by, element } from 'protractor';

export class ListaProductos {
  private tituloListaProductos = element(by.css('h1'));
  private listaProductos = element.all(by.className('product-container'));
  private botonAñadirCarrito = element.all(
    by.className('product-container__info__cart-button')
  );
  private mensajeAgregadoCarrito = element(by.className('p-toast-summary'));

  async contarProductos() {
    return await this.listaProductos.count();
  }

  async obtenerTituloListaProductos() {
    return await this.tituloListaProductos.getText();
  }

  async obtenerProducto(index: number) {
    return await this.listaProductos.get(index);
  }

  async clickBotonAñadirCarrito(index: number) {
    return await this.botonAñadirCarrito.get(index).click();
  }

  async obtenerMensajeAgregadoCarrito() {
    return await this.mensajeAgregadoCarrito.getText();
  }
}
