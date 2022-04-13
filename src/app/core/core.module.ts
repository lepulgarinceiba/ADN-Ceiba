import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpService } from './services/http.service';
import { RouterModule } from '@angular/router';
import { SharedPrimeNGModule } from '@shared/sharedPrimeNG/shared-prime-ng/shared-prime-ng.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, SharedPrimeNGModule],
  exports: [NavbarComponent],
  providers: [HttpService],
})
export class CoreModule {}
