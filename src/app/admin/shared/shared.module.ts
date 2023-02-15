import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AdminHeaderComponent, AdminFooterComponent],
})
export class AdminSharedModule { }