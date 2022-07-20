import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiService } from 'src/app/services/product/products-api.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss'],
})
export class SingleproductComponent implements OnInit {
  constructor(
    private activeRouter: ActivatedRoute,
    private _productApi: ProductsApiService
  ) {}

  productCategory!: any;
  productId!: any;
  singleProduct!: any;
  products!:any;

  ngOnInit(): void {
    this.productId = this.activeRouter.snapshot.params['id'];

    this._productApi.singleProduct(this.productId).subscribe((product) => {
      this.singleProduct = product[0];
      console.log('Single Product:', this.singleProduct);
    });
    this.assignProduct()
  }

  assignProduct(){
    setTimeout(() => {
      this.singleProduct = this.products
    }, 1000);
  }
}
