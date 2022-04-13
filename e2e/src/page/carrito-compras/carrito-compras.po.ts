import { by, element } from 'protractor';

export class CarritoCompras {
  private tituloCarritoCompras = element(by.css('h1'));
  private tituloNoHayProductos = element(by.css('h2'));
  private listaCarritoCompras = element.all(by.className('cart-product'));
  private incrementarCantidad = element.all(by.className('increment-quantity'));
  private decrementarCantidad = element.all(by.className('decrement-quantity'));
  private botonComprar = element(by.id('buyButton'));
  private botonAgregarProductos = element(by.id('addProducts'));
  private checkBoxEnvioPlus = element(by.tagName('p-checkbox'));
  private inputFechaEnvioPlus = element(by.id('plusShippingDate'));
  private eliminarProductoCarrito = element.all(by.className('cart-product__details__info__action'));
  private inputCantidadProductos = element.all(by.tagName('p-inputnumber')).first();
  private dialogoFinalizarCompra = element(by.tagName('p-dialog'));
  private botonFinalizarCompra = element(by.id('checkoutButton'));
  private inputName = element(by.id('fullName'));
  private inputEmail = element(by.id('email'));
  private inputAddress = element(by.id('address'));

  async contarProductosCarritoCompras() {
    return await this.listaCarritoCompras.count();
  }

  async obtenerTituloCarritoCompras() {
    return await this.tituloCarritoCompras.getText();
  }

  async obtenerTituloNoHayProductos() {
    return await this.tituloNoHayProductos.getText();
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

  async obtenerBotonFinalizarCompra() {
    return await this.botonFinalizarCompra.getAttribute('disabled');
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

  async obtenerDialogoFinalizarCompra() {
    return await this.dialogoFinalizarCompra;
  }

  async clickBotonFinalizarCompra() {
    await this.botonFinalizarCompra.click();
  }

  async ingresarNombre(nombre) {
    await this.inputName.sendKeys(nombre);
  }

  async ingresarEmail(email) {
    await this.inputEmail.sendKeys(email);
  }

  async ingresarDireccion(direccion) {
    await this.inputAddress.sendKeys(direccion);
  }
}
