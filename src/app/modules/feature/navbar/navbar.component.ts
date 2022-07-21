import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart/add-to-cart.service';
import { AddToWishlistService } from 'src/app/services/add-to-wishlist/add-to-wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private _addToCartService: AddToCartService,
    private _addToWishListService: AddToWishlistService
  ) {}

  cartProductList!: any;
  cartLength: number = 0;
  wishList!: any;
  wishListLength!: any;

  ngOnInit(): void {
    this._addToCartService.getProducts().subscribe((res: any) => {
      this.cartLength = res.length;
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
  }

  viewWishList() {
    this._addToWishListService.getWishList().subscribe((products: any) => {
      this.wishList = products;
    });
  }

  removeWishListProduct(productId: any) {
    this._addToWishListService.removeWishListProduct(productId);
  }
  addToCartFromWishList(product: any, productId: any){
    this._addToCartService.setProduct(product);
    this._addToWishListService.removeWishListProduct(productId);
  }
}
