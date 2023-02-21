import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent, }  , 
  { path: 'about', component: AboutComponent, },
  { path: 'contact', component: ContactComponent, },
  { path: 'login', component: LogInComponent, },
  { path: 'register', component: RegisterComponent, },
];
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularMaterialModule,
  ],
  exports: [RouterModule],
})
export class UserModule { }
