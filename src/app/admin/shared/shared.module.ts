import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],
  exports: [AdminHeaderComponent, AdminFooterComponent,UnauthorizedComponent],
})
export class AdminSharedModule { }
