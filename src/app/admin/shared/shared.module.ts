import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  exports: [AdminHeaderComponent, AdminFooterComponent],
})
export class AdminSharedModule { }
