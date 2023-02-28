import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'add', component: AddEditUserComponent },
  { path: 'edit/:userId', component: AddEditUserComponent },
  // { path: 'add', component: AddEditProductComponent ,canActivate:[AuthGuard], data: { permission:true }},//SharedInfo.loggedInUser.permission.canAddProduct
];

@NgModule({
  declarations: [
    UsersListComponent,
    AddEditUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
