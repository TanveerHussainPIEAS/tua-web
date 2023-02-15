import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { EditOrderComponent } from './edit-order/edit-order.component';



@NgModule({
  declarations: [
    OrdersListComponent,
    EditOrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
