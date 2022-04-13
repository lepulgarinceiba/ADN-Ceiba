import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SecurityGuard } from '@core/guard/security.guard';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('@products-list/products-list.module').then(
        (mod) => mod.ProductsListModule
      ),
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('@shopping-cart/shopping-cart.module').then(
        (mod) => mod.ShoppingCartModule
      ),
  },
  {
    path: 'shopping-history',
    loadChildren: () =>
      import('@shopping-history/shopping-history.module').then(
        (mod) => mod.ShoppingHistoryModule
      ),
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
