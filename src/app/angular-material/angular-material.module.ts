import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule
  ],
  exports:[
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule
  ]
})
export class AngularMaterialModule { }
