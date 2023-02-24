import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductDialogComponent } from '../shared/product-dialog/product-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Product[]=[];
  constructor(
    private productService: ProductService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private localStorageService: LocalStorageService,
    ) { }

  ngOnInit(): void {
    this.getProducts();
    this.setUserPreference();
  }

openDialog(productId:number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: productId,
        title: 'Product Details'
    };

    this.dialog.open(ProductDialogComponent, dialogConfig);
    
    const dialogRef = this.dialog.open(ProductDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
    dialogRef.close();
}


  private getProducts() {
    this.productService.getAllProducts()
      .subscribe({
        next: (res) => {
          if (res.statusCode == 200) {
             console.log('Products',res.results);
             this.products=res.results;             
          }
        },
        error: (err) => {
          this._snackBar.open('Something went wrong while loading products', 'Close',{
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          });
        }
      });
  }

  setUserPreference(){
    //Get logged-in-user
    let user=this.localStorageService.getItem('logged-in-user')
    console.log('Logged In User is here: ',user);
    //If user is logged-in, get his/her prefered details
  }
}
