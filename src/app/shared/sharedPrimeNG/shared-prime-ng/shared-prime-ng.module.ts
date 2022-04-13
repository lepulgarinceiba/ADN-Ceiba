import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng-lts/button';
import { ToastModule } from 'primeng-lts/toast';
import { BadgeModule } from 'primeng-lts/badge';
import { InputNumberModule } from 'primeng-lts/inputnumber';
import { SkeletonModule } from 'primeng-lts/skeleton';
import { SidebarModule } from 'primeng-lts/sidebar';
import { CheckboxModule } from 'primeng-lts/checkbox';
import { CalendarModule } from 'primeng-lts/calendar';
import { DialogModule } from 'primeng-lts/dialog';
import { InputTextModule } from 'primeng-lts/inputtext';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ToastModule,
    BadgeModule,
    InputNumberModule,
    SkeletonModule,
    SidebarModule,
    CheckboxModule,
    CalendarModule,
    DialogModule,
    InputTextModule,
  ],
  exports: [
    ButtonModule,
    ToastModule,
    BadgeModule,
    InputNumberModule,
    SkeletonModule,
    SidebarModule,
    CheckboxModule,
    CalendarModule,
    DialogModule,
    InputTextModule,
  ],
})
export class SharedPrimeNGModule {}
