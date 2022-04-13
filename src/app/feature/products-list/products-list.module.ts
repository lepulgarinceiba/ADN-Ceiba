import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsService } from './shared/services/products.service';
import { MessageService } from 'primeng-lts/api';
import { SharedPrimeNGModule } from '@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    ProductsListRoutingModule,
    CommonModule,
    SharedModule,
    SharedPrimeNGModule,
  ],
  providers: [ProductsService, MessageService],
})
export class ProductsListModule {}
