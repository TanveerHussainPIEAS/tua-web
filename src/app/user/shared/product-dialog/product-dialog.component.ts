import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent {
  // form: FormGroup;
  description:string;
  productId:number=0;
  product: Product;

  constructor(
    private productService: ProductService,
    private _snackBar: MatSnackBar,
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<ProductDialogComponent>,
      @Inject(MAT_DIALOG_DATA) data:any) {

      this.description = data.description;
      this.productId=data.id;
  }

  ngOnInit() {
    this.getProductById();
      // this.form = this.fb.group({
      //     description: [this.description, []],
      //     ...
      // });
  }

  addToCart() {
      this.dialogRef.close(this.productId);
  }

  close() {
      this.dialogRef.close(0);
  }

  private getProductById() {
    this.productService.getAllProductById(this.productId)
      .subscribe({
        next: (res) => {
          if (res.statusCode == 200) {
             this.product=res.results;  
             console.log('Product++++ : ', this.product)           
          }
        },
        error: (err) => {
          this._snackBar.open('Something went wrong while loading product', 'Close',{
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          });
        }
      });
  }
}
