import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { UserSessionService } from '../user-session/user-session.service';

@Injectable({
  providedIn: 'root',
})
export class AddToWishlistService {
  constructor(private _userSession: UserSessionService) {}

  wishList: any = [];

  getWishListLocalData!: any;
  productWishList = new BehaviorSubject<any>([]);

  getWishList() {
    let previousList = this._userSession.getWishListData();

    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.wishList = JSON.parse(previousList);
    }
    this.productWishList.next(this.wishList);

    return this.productWishList.asObservable();
  }

  setWishList(product: any) {
    let previousList = this._userSession.getWishListData();
    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.wishList = JSON.parse(previousList);
    }
    this.wishList.push(product);
    this.productWishList.next(this.wishList);
    // localStorage.setItem('wishListData', JSON.stringify(this.wishList));
    // localStorage.removeItem('wishListData');
    this._userSession.setWishListProducts(JSON.stringify(this.wishList))
  }



  removeWishListProduct(productId: any) {
    let previousList = this._userSession.getWishListData();
    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.wishList = JSON.parse(previousList);
      this.wishList.map((item: any, index: any) => {
        if (item._id == productId) {
          this.wishList.splice(index, 1);
        }
      });
    }
    this.productWishList.next(this.wishList);

    // localStorage.setItem('wishListData', JSON.stringify(this.wishList));
    // this.toast.success({
    //   detail: 'SUCCESS',
    //   summary: 'Product Removed',
    //   duration: 5000,
    // });
    this._userSession.setWishListProducts(JSON.stringify(this.wishList))

    alert("Product removed");
  }
}
