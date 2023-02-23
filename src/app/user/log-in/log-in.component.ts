import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { AuthenticatedUser, LoginModel } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductService } from 'src/app/services/product/product.service';

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
    @Inject(MAT_DIALOG_DATA) data: any) {

    this.title = data.title;
  }

  profileForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(100)]),
  });

  ngOnInit() {
    debugger;
    // this.getProductById();
    this.toastr.error('Something went wrong while loading competencies');
  }

  createAccount() {
    this.dialogRef.close(0);
  }

  signIn() {

    debugger
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
            console.log('uuthenticatedUser++++ : ', this.uuthenticatedUser);
            this.dialogRef.close(0);
          }
          
        },
        error: (err) => {
          debugger
          if (err.status == 401) {
            this.toastr.success('Message', 'Title');
            // this.toastr.error('Something went wrong while loading competencies');
            // this._snackBar.open('Invalid email or password' , 'Close', {
            //   horizontalPosition: 'right',
            //   verticalPosition: 'bottom',
            // });
          }
          else{
            this._snackBar.open('Something went wrong' , 'Close', {
              horizontalPosition: 'right',
              verticalPosition: 'bottom',
            });
          }
          
        }
      });
  }
}
