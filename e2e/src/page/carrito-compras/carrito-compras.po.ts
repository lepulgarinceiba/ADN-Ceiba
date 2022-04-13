import { by, element } from 'protractor';

export class CarritoCompras {
  private tituloCarritoCompras = element(by.css('h1'));
  private tituloNohayProductos = element(by.css('h2'));
  private listaCarritoCompras = element.all(by.className('cart-product'));
  private incrementarCantidad = element.all(by.className('increment-quantity'));
  private decrementarCantidad = element.all(by.className('decrement-quantity'));
  private botonComprar = element(by.id('buyButton'));
  private botonAgregarProductos = element(by.id('addProducts'));
  private checkBoxEnvioPlus = element(by.id('plusShipping'));
  private inputFechaEnvioPlus = element(by.id('plusShippingDate'));
  private eliminarProductoCarrito = element.all(
    by.className('cart-product__details__info__action')
  );
  private inputCantidadProductos = element
    .all(by.tagName('p-inputnumber'))
    .first();

  async contarProductosCarritoCompras() {
    return await this.listaCarritoCompras.count();
  }

  async obtenerTituloCarritoCompras() {
    return await this.tituloCarritoCompras.getText();
  }

  async obtenerTituloNoHayProductos() {
    return await this.tituloNohayProductos.getText();
  }

  async clickIncrementarCantidad(index: number) {
    return this.incrementarCantidad.get(index).click();
  }

  async clickDecrementarCantidad(index: number) {
    await this.decrementarCantidad.get(index).click();
  }

  async clickBotonComprar() {
    await this.botonComprar.click();
  }

  async clickBotonAgregarProductos() {
    await this.botonAgregarProductos.click();
  }

  async clickCheckBoxEnvioPlus() {
    await this.checkBoxEnvioPlus.click();
  }

  async clickEliminarProductoCarrito(index: number) {
    await this.eliminarProductoCarrito.get(index).click();
  }

  async obtenerBotonComprar() {
    return await this.botonComprar.getAttribute('disabled');
  }

  async obtenerCampoFechaEnvio() {
    return await this.inputFechaEnvioPlus;
  }
  async ingresarFechaEnvioPlus(fechaEnvioPlus) {
    await this.inputFechaEnvioPlus.sendKeys(fechaEnvioPlus);
  }

  async obtenerInputCantidadProductos() {
    return await this.inputCantidadProductos.getAttribute('ng-reflect-model');
  }
}
