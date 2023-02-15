import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHeaderComponent } from './admin/shared/admin-header/admin-header.component';
import { HomeComponent } from './user/home/home.component';
import { HeaderComponent } from './user/shared/header/header.component';

const routes: Routes = [
  { path: '', component: HeaderComponent, loadChildren: () => import('./user/user.module').then(c => c.UserModule)},
  { path: 'admin', component: AdminHeaderComponent, loadChildren: () => import('./admin/orders/orders.module').then(c => c.OrdersModule)},
  { path: 'products', component: AdminHeaderComponent, loadChildren: () => import('./admin/product/product.module').then(c => c.ProductModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
