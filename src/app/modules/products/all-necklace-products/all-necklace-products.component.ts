import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiService } from 'src/app/services/product/products-api.service';

@Component({
  selector: 'app-all-necklace-products',
  templateUrl: './all-necklace-products.component.html',
  styleUrls: ['./all-necklace-products.component.scss'],
})
export class AllNecklaceProductsComponent implements OnInit {
  constructor(
    private activatedroute: ActivatedRoute,
    private _productApi: ProductsApiService
  ) {}
  category!: any;
  allProducts!: any;

  ngOnInit(): void {
    this.category = this.activatedroute.snapshot.params['cat'];

    this._productApi
      .getProductByCategory(this.category)
      .subscribe((products) => {
        console.log('filter Products :', products);
        this.allProducts = products;
      });
  }
}
