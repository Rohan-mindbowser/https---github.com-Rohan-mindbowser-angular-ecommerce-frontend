import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiService } from 'src/app/services/product/products-api.service';
import { AddToCartService } from 'src/app/services/add-to-cart/add-to-cart.service';
import { AddToWishlistService } from 'src/app/services/add-to-wishlist/add-to-wishlist.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-all-necklace-products',
  templateUrl: './all-necklace-products.component.html',
  styleUrls: ['./all-necklace-products.component.scss'],
})
export class AllNecklaceProductsComponent implements OnInit {
  constructor(
    private activatedroute: ActivatedRoute,
    private _productApi: ProductsApiService,
    private _addToCartService: AddToCartService,
    private _addToWishListService: AddToWishlistService,
    private toast:NgToastService

  ) {}

  category!: any;
  allProducts!: any;
  braceletProducts!: any;
  pushProductToCart!: any;
  pushProductToWishList!: any;

  ngOnInit(): void {
    this.category = this.activatedroute.snapshot.params['cat'];

    this._productApi
      .getProductByCategory(this.category)
      .subscribe((products) => {
        console.log('filter Products :', products);
        this.allProducts = products;
      });
  }

  addToCart(id: any) {
    this.pushProductToCart = this.allProducts.filter((element: any) => {
      return element['_id'] == id;
    });
    this._addToCartService.setProduct(this.pushProductToCart[0]);
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Added In Cart',
      duration: 5000,
    });
  }

  addToWishList(id: any) {
    this.pushProductToWishList = this.allProducts.filter((element: any) => {
      return element['_id'] == id;
    });
    this._addToWishListService.setWishList(this.pushProductToWishList[0]);
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Added In Wishlist',
      duration: 5000,
    });
  }
}
