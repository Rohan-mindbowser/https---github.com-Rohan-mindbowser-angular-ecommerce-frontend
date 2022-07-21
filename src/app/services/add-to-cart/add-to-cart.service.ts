import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { UserSessionService } from '../user-session/user-session.service';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  constructor(private _userSession: UserSessionService) {}

  cartItemList: any = [];
  cartProductList = new BehaviorSubject<any>([]);
  totalCartValue = new BehaviorSubject<any>(0);
  getLocalData!: any;
  finalList!: any;
  getProductItems: any = [];
  editedCartList: any = [];

  //Get all cart products
  getProducts() {
    let previousList = this._userSession.getProductFromLocalStorage();
    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.cartItemList = JSON.parse(previousList);
    }
    this.cartProductList.next(this.cartItemList);
    return this.cartProductList.asObservable();
  }

  //Get total cart value
  getCartValue() {
    let value = 0;
    let previousList = this._userSession.getProductFromLocalStorage();
    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.cartItemList = JSON.parse(previousList);
    }
    this.cartItemList.forEach((item: any) => {
      // console.log('from getcartvalue :', item.original_price);
      value += item.original_price;
    });
    if (value <= 2000 && value !== 0) {
      value += 100;
    }
    this.totalCartValue.next(value);
    return this.totalCartValue.asObservable();
  }

  //Add product in cart
  setProduct(product: any) {
    let previousList = this._userSession.getProductFromLocalStorage();
    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.cartItemList = JSON.parse(previousList);
    }
    this.cartItemList.push(product);
    this.cartProductList.next(this.cartItemList);
    this._userSession.setProductsToLocalStorage(
      JSON.stringify(this.cartItemList)
    );
  }

  //Remove product from cart
  removeProduct(productId: any) {
    let previousList = this._userSession.getProductFromLocalStorage();
    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.cartItemList = JSON.parse(previousList);
      this.cartItemList.map((item: any, index: any) => {
        if (item._id == productId) {
          this.cartItemList.splice(index, 1);
        }
      });
    }
    this.cartProductList.next(this.cartItemList);
    // localStorage.setItem('cartData', JSON.stringify(this.cartItemList));
    this._userSession.setProductsToLocalStorage(
      JSON.stringify(this.cartItemList)
    );
  }
}
