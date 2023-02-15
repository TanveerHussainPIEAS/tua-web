import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

const routes: Routes = [
  { path: '', component: HomeComponent, }  , 
  { path: 'about', component: AboutComponent, },
  { path: 'contact', component: ContactComponent, },
];
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularMaterialModule,
  ],
  exports: [RouterModule],
})
export class UserModule { }
