import { browser } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { ListaProductos } from '../page/lista-productos/lista-productos.po';

describe('workspace-project Lista Productos', () => {
  let navBar: NavbarPage;
  let listaProductos: ListaProductos;

  beforeEach(() => {
    navBar = new NavbarPage();
    listaProductos = new ListaProductos();
  });

  it('Debería mostrar el titulo de la lista de productos', () => {
    navBar.clickListaProductos();
    expect(listaProductos.obtenerTituloListaProductos()).toBe(
      'Lista de productos'
    );
  });

  it('Debería contar los productos', () => {
    expect(8).toBe(listaProductos.contarProductos());
  });

  it('Debería agregar dos producto al carrito', async () => {
    browser
      .actions()
      .mouseMove(await listaProductos.obtenerProducto(0))
      .perform();
    await listaProductos.clickBotonAñadirCarrito(0);
    browser
      .actions()
      .mouseMove(await listaProductos.obtenerProducto(1))
      .perform();
    await listaProductos.clickBotonAñadirCarrito(1);
    expect(listaProductos.obtenerMensajeAgregadoCarrito()).toBe(
      'Producto agregado al carrito'
    );
  });

  it('Debería validar que exista el carrito en los cookies', () => {
    expect(browser.manage().getCookie('cart')).toBeTruthy();
  });
});
