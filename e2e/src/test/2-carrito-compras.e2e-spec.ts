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
      'Carrito de compras (1 productos)'
    );
  });

  it('Debería contar los productos', () => {
    expect(1).toBe(carritoCompras.contarProductosCarritoCompras());
  });

  it('Debería validar que exista el carrito de compras en los cookies', () => {
    expect(browser.manage().getCookie('cart')).toBeTruthy();
  });

  // it('Debería mostrar el campo de fecha cuando se elige envío plus'),
  //   () => {
  //     carritoCompras.clickCheckBoxEnvioPlus();
  //     expect(carritoCompras.obtenerCampoFechaEnvio()).toBeTruthy();
  //   };

  // it('Deberia sumar la cantidad de un producto en el carrito de compras', () => {
  //   carritoCompras.clickIncrementarCantidad(0);
  //   expect(carritoCompras.obtenerInputCantidadProductos()).toBe('2');
  // });

  it('Debería eliminar un producto del carrito de compras', () => {
    carritoCompras.clickEliminarProductoCarrito(0);
    expect(carritoCompras.obtenerTituloCarritoCompras()).toBe(
      'Carrito de compras (0 productos)'
    );
    expect(0).toBe(carritoCompras.contarProductosCarritoCompras());
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
