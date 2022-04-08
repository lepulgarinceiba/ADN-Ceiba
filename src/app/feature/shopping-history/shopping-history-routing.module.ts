import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingHistoryComponent } from './components/shopping-history/shopping-history.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingHistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingHistoryRoutingModule {}
