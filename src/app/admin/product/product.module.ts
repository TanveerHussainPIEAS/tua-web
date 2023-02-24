import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add', component: AddEditProductComponent },
  { path: 'edit/:productId', component: AddEditProductComponent }
];

@NgModule({
  declarations: [
    AddEditProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductModule { }
