import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsService } from './shared/services/products.service';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [ProductsListRoutingModule, CommonModule, SharedModule],
  providers: [ProductsService],
})
export class ProductsListModule {}
