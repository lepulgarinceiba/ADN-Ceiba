import { browser } from 'protractor';
import { AppPage } from '../app.po';
import { CarritoCompras } from '../page/carrito-compras/carrito-compras.po';
import { NavbarPage } from '../page/navbar/navbar.po';

describe('workspace-project Carrito Compras', () => {
  let navBar: NavbarPage;
  let carritoCompras: CarritoCompras;
  let page: AppPage;

  beforeEach(() => {
    navBar = new NavbarPage();
    carritoCompras = new CarritoCompras();
    page = new AppPage();
  });

  it('Debería mostrar el titulo del carrito de compras', () => {
    page.navigateTo();
    navBar.clickCarritoCompras();
    expect(carritoCompras.obtenerTituloCarritoCompras()).toBe(
      'Carrito de compras (2 productos)'
    );
  });

  it('Debería contar los productos', () => {
    expect(2).toBe(carritoCompras.contarProductosCarritoCompras());
  });

  it('Debería validar que exista el carrito de compras en los cookies', () => {
    expect(browser.manage().getCookie('cart')).toBeTruthy();
  });

  it('Debería eliminar un producto del carrito de compras', () => {
    carritoCompras.clickEliminarProductoCarrito(0);
    expect(carritoCompras.obtenerTituloCarritoCompras()).toBe(
      'Carrito de compras (1 productos)'
    );
    expect(1).toBe(carritoCompras.contarProductosCarritoCompras());
  });

  it('Debería mostrar el campo de fecha cuando se elige envío plus', () => {
    carritoCompras.clickCheckBoxEnvioPlus();
    expect(carritoCompras.obtenerCampoFechaEnvio()).toBeTruthy();
  });

  it('Debería bloquear el botón comprar cuando no se elige fecha de envío plus', () => {
    expect(carritoCompras.obtenerBotonComprar()).toBeTruthy();
  });

  it('Debería ingresar fecha de envío plus y habilitar el botón comprar', () => {
    carritoCompras.ingresarFechaEnvioPlus('04/20/2022');
    expect(carritoCompras.obtenerBotonComprar()).toBeFalsy();
  });

  it('Debería mostrar dialogo de finalización de compra', async () => {
    carritoCompras.clickBotonComprar();
    expect(carritoCompras.obtenerDialogoFinalizarCompra()).toBeTruthy();
  });

  it('Debería estar bloqueado el botón de finalizar compra', () => {
    expect(carritoCompras.obtenerBotonFinalizarCompra()).toBeTruthy();
  });

  it('Debería ingresar los datos para finalizar la compra', () => {
    carritoCompras.ingresarNombre('aaaaaaaa asdsad');
    carritoCompras.ingresarEmail('sdasdad@asdas.com');
    carritoCompras.ingresarDireccion('dsads asdasds');
    carritoCompras.clickBotonFinalizarCompra();
    expect(carritoCompras.contarProductosCarritoCompras()).toBe(0);
  });

  it('Debería informar que no hay productos en el carrito de compras', () => {
    expect(carritoCompras.obtenerTituloNoHayProductos()).toBe(
      'No hay elementos en el carrito de compras'
    );
  });

  it('Debería estar deshabilitado el botón de comprar si no hay productos', () => {
    expect(carritoCompras.obtenerBotonComprar()).toBeTruthy();
  });
});
