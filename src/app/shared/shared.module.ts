import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeErrorCamposDirective } from './directivas/error-campos/directiva/mensaje-error-campos.directive';
import { MensajeErrorCamposSubmitDirective } from './directivas/error-campos/directiva/mensaje-error-campos-submit.directive';
import { MensajeErrorCamposContenedorDirective } from './directivas/error-campos/directiva/mensaje-error-campos-contenedor.directive';
import { ErrorCamposPlantillaComponent } from './directivas/error-campos/componente/error-campos-plantilla.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrackByPipe } from './pipe/track-by.pipe';
import { ProductElementComponent } from './components/product-element/product-element.component';
import { SharedPrimeNGModule } from './sharedPrimeNG/shared-prime-ng/shared-prime-ng.module';
import { ProductElementSkeletonComponent } from './components/product-element-skeleton/product-element-skeleton.component';

@NgModule({
  declarations: [
    ErrorCamposPlantillaComponent,
    MensajeErrorCamposDirective,
    MensajeErrorCamposContenedorDirective,
    MensajeErrorCamposSubmitDirective,
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
    MensajeErrorCamposDirective,
    MensajeErrorCamposContenedorDirective,
    MensajeErrorCamposSubmitDirective,
    ReactiveFormsModule,
    FormsModule,
    TrackByPipe,
    ProductElementComponent,
    ProductElementSkeletonComponent,
  ],
})
export class SharedModule {}
