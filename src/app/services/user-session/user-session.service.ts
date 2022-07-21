import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  constructor() {}

  getProductFromLocalStorage() {
    return localStorage.getItem('cartData');
  }

  setProductsToLocalStorage(products: any) {
    localStorage.setItem('cartData', products);
  }

  getWishListData() {
    return localStorage.getItem('wishListData');
  }

  setWishListProducts(products: any) {
    localStorage.setItem('wishListData', products);
  }
}
