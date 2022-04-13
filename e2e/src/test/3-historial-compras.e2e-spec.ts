import { HistorialCompras } from '../page/historial-compras/historial-compras.po';
import { NavbarPage } from '../page/navbar/navbar.po';

describe('workspace-project Historial Compras', () => {
  let navBar: NavbarPage;
  let historialCompras: HistorialCompras;

  beforeEach(() => {
    navBar = new NavbarPage();
    historialCompras = new HistorialCompras();
  });

  it('Debería mostrar el titulo del historial de compras', () => {
    navBar.clickHistorialCompras();
    expect(historialCompras.obtenerTituloHistorialCompras()).toBe(
      'Historial de compras'
    );
  });

  it('Debería contar los productos del historial de compras', () => {
    navBar.clickHistorialCompras();
    expect(3).toBe(historialCompras.contarProductos());
  });
});
