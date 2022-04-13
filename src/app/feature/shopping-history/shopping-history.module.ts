import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingHistoryComponent } from './components/shopping-history/shopping-history.component';
import { ShoppingHistoryRoutingModule } from './shopping-history-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ShoppingHistoryService } from './shared/services/shopping-history.service';
import { MessageService } from 'primeng-lts/api';

@NgModule({
  declarations: [ShoppingHistoryComponent],
  imports: [ShoppingHistoryRoutingModule, CommonModule, SharedModule],
  providers: [ShoppingHistoryService, MessageService],
})
export class ShoppingHistoryModule {}
