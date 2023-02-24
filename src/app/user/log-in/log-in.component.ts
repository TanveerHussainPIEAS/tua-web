import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { AuthenticatedUser, LoginModel } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { ProductService } from 'src/app/services/product/product.service';
import { SharedInfo } from '../shared/shared-info';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  // form: FormGroup;
  title: string = '';
  uuthenticatedUser: AuthenticatedUser;
  hide = true;

  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<LogInComponent>,
    private localStorageService: LocalStorageService,
    @Inject(MAT_DIALOG_DATA) data: any) {

    this.title = data.title;
  }

  profileForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(100)]),
  });

  ngOnInit() {
  }

  createAccount() {
    this.dialogRef.close(0);
  }

  signIn() {    
    let loginModel: LoginModel = {
      email: this.profileForm.value.email == null ? '' : this.profileForm.value.email,
      password: this.profileForm.value.password == null ? '' : this.profileForm.value.password,
    }
    this.loginUser(loginModel);
    
  }


  private loginUser(user: LoginModel) {
    this.authService.loginUser(user)
      .subscribe({
        next: (res) => {
          if (res.statusCode == 200) {
            this.uuthenticatedUser = res.results;
            this.localStorageService.setItem('logged-in-user',this.uuthenticatedUser);  
            SharedInfo.loggedInUser= this.uuthenticatedUser;         
            this.toastr.success('Success', 'Logged In Sucessfuly');
            this.dialogRef.close(0);
          }
          
        },
        error: (err) => {          
          if (err.status == 401) {
            this.toastr.error('Error','Invalid email or password');
            // this._snackBar.open('Invalid email or password' , 'Close', {
            //   horizontalPosition: 'right',
            //   verticalPosition: 'bottom',
            // });
          }
          else{
            this.toastr.error('Error','Something went wrong.');
          }
          
        }
      });
  }
}
