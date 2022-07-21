import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart/add-to-cart.service';
import { AddToWishlistService } from 'src/app/services/add-to-wishlist/add-to-wishlist.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private _addToCartService: AddToCartService,
    private _addToWishListService: AddToWishlistService,
    private toast: NgToastService
  ) {}

  cartProductList!: any;
  cartLength: number = 0;
  wishList!: any;
  wishListLength!: any;

  ngOnInit(): void {
    this._addToCartService.getProducts().subscribe((res: any) => {
      this.cartLength = res.length;
    });

    this._addToWishListService.getWishList().subscribe((res: any) => {
      this.wishListLength = res.length;
    });
  }

  viewCartProduct() {
    this._addToCartService.getProducts().subscribe((products) => {
      this.cartProductList = products;
    });
    console.log('Cart products :', this.cartProductList);
  }

  addToCart(product: any, productId: any) {
    this._addToCartService.setProduct(product);
  }

  removeProduct(productId: any) {
    this._addToCartService.removeProduct(productId);
    this._addToCartService.getCartValue().subscribe((res: any) => {});
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Removed from cart',
      duration: 5000,
    });
  }

  viewWishList() {
    this._addToWishListService.getWishList().subscribe((products: any) => {
      this.wishList = products;
    });
  }

  removeWishListProduct(productId: any) {
    this._addToWishListService.removeWishListProduct(productId);
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Removed from wishlist',
      duration: 5000,
    });
  }
  addToCartFromWishList(product: any, productId: any) {
    this._addToCartService.setProduct(product);
    this._addToWishListService.removeWishListProduct(productId);
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Moved to cart',
      duration: 5000,
    });
  }
}
