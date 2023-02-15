import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ]
})
export class SharedModule { }
