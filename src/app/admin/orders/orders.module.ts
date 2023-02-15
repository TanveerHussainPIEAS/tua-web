import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';


const routes: Routes = [
  {
    path: '',
    component: OrdersListComponent
  }
];

@NgModule({
  declarations: [
    OrdersListComponent,
    EditOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularMaterialModule,
  ]
  ,
  exports: [RouterModule],
})
export class OrdersModule { }
