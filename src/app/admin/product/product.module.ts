import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    AddEditProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
