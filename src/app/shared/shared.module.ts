import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrackByPipe } from './pipe/track-by.pipe';
import { ProductElementComponent } from './components/product-element/product-element.component';
import { SharedPrimeNGModule } from './sharedPrimeNG/shared-prime-ng/shared-prime-ng.module';
import { ProductElementSkeletonComponent } from './components/product-element-skeleton/product-element-skeleton.component';

@NgModule({
  declarations: [
    TrackByPipe,
    ProductElementComponent,
    ProductElementSkeletonComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedPrimeNGModule,
    CommonModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TrackByPipe,
    ProductElementComponent,
    ProductElementSkeletonComponent,
  ],
})
export class SharedModule {}
