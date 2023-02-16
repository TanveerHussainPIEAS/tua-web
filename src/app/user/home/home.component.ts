import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private productService: ProductService,
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }



  private getProducts() {
    this.productService.getAllProducts()
      .subscribe({
        next: (res) => {
          if (res.statusCode == 200) {
             console.log('Products',res.results);
          }
        },
        error: (err) => {
          // this.toastr.error('Something went wrong while loading product types');
        }
      });
  }
}
