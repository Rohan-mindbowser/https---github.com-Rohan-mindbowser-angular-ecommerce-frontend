import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiService } from 'src/app/services/product/products-api.service';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.scss'],
})
export class FilterProductComponent implements OnInit {
  constructor(
    private activatedroute: ActivatedRoute,
    private _productApi: ProductsApiService
  ) {}

  allProducts!: any;
  category!: any;

  ngOnInit(): void {
    this.category = this.activatedroute.snapshot.params['cat'];

    console.log(this.category)

    this._productApi
      .getProductByCategory(this.category)
      .subscribe((products) => {
        console.log('filter Products :', products);
        this.allProducts = products;
      });
  }
}
