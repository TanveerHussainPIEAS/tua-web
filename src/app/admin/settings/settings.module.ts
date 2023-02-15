import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTypeComponent } from './product-type/product-type.component';
import { OrderTypeComponent } from './order-type/order-type.component';
import { OrderStatusComponent } from './order-status/order-status.component';



@NgModule({
  declarations: [
    ProductTypeComponent,
    OrderTypeComponent,
    OrderStatusComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
