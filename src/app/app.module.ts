import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminSharedModule } from './admin/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './user/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductDialogComponent } from './user/shared/product-dialog/product-dialog.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminSharedModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProductDialogComponent]
})
export class AppModule { }
