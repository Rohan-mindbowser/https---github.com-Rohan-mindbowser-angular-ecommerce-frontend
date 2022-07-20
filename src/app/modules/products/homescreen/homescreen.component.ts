import { Component, Input, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/services/product/products-api.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss'],
})
export class HomescreenComponent implements OnInit {
  constructor(private _productsApi: ProductsApiService) {}

  allProducts!: [];
  allBracelets!: [];

  ngOnInit(): void {
    this.getAllProducts();
    this.filterBracelets();
  }

  getAllProducts() {
    this._productsApi.getAllProducts().subscribe((products) => {
      this.allProducts = products;
      console.log(products)
    },
    (error: any) => {
      console.log('error :', error);
    });
    console.log(this.allProducts);
  }

  filterBracelets() {
    console.log(this.allProducts);
  }
}
