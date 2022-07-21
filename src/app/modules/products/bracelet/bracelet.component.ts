import { Component, Input, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart/add-to-cart.service';
import { AddToWishlistService } from 'src/app/services/add-to-wishlist/add-to-wishlist.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-bracelet',
  templateUrl: './bracelet.component.html',
  styleUrls: ['./bracelet.component.scss'],
})
export class BraceletComponent implements OnInit {
  constructor(
    private _addToCartService: AddToCartService,
    private _addToWishListService: AddToWishlistService,
    private toast: NgToastService
  ) {}

  @Input() products!: [];

  braceletProducts!: any;
  pushProductToCart!: any;
  pushProductToWishList!: any;

  ngOnInit(): void {
    // console.log('From child :', this.products);
    this.braceletProducts = this.products;
  }
  addToCart(id: any) {
    this.pushProductToCart = this.braceletProducts.filter((element: any) => {
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
    this.pushProductToWishList = this.braceletProducts.filter(
      (element: any) => {
        return element['_id'] == id;
      }
    );
    this._addToWishListService.setWishList(this.pushProductToWishList[0]);
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Added In Wish List',
      duration: 5000,
    });
  }
}
