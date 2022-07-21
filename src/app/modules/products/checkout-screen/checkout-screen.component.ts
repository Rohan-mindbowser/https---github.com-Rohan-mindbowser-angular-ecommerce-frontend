import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart/add-to-cart.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-checkout-screen',
  templateUrl: './checkout-screen.component.html',
  styleUrls: ['./checkout-screen.component.scss'],
})
export class CheckoutScreenComponent implements OnInit {
  constructor(
    private _productCartService: AddToCartService,
    private toast: NgToastService
  ) {}

  allCartProducts!: any;
  totalProduct!: any;
  totalPrice: number = 0;
  isCouponApplied: boolean = true;
  finalValue!: any;
  braceletCount: number = 0;
  earringsCount: number = 0;
  necklaceCount: number = 0;
  ringsCount: number = 0;
  subTotal: number = 0;
  discountValue: number = 0;
  couponCode!: any;

  ngOnInit(): void {
    // this.allCartProducts = this._productCartService.getProducts();
    this._productCartService.getProducts().subscribe((res: any) => {
      this.allCartProducts = res;
    });
    this.totalProduct = this.allCartProducts.length;

    this._productCartService.getCartValue().subscribe((res: any) => {
      this.totalPrice = res;
      this.subTotal = res;
      if (res <= 2000) {
        this.subTotal - +100;
      }
    });
    this.finalValue = this.totalPrice;
  }

  applyCoupon(value: any) {
    this.allCartProducts.forEach((item: any) => {
      if (item.category === 'bracelet') {
        this.braceletCount++;
      }
    });

    this.allCartProducts.forEach((item: any) => {
      if (item.category === 'earring') {
        this.earringsCount++;
      }
    });

    this.allCartProducts.forEach((item: any) => {
      if (item.category === 'necklace') {
        this.necklaceCount++;
      }
    });

    this.allCartProducts.forEach((item: any) => {
      if (item.category === 'ring') {
        this.ringsCount++;
      }
    });

    if (value === 10 && this.earringsCount >= 1) {
      this.discountValue = (value / 100) * this.totalPrice;
      this.totalPrice = this.totalPrice - this.discountValue;
      this.isCouponApplied = false;
      this.couponCode = 'EAR00010';

      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Coupon Applied',
        duration: 5000,
      });
    } else if (value === 20 && this.necklaceCount >= 2) {
      this.discountValue = (value / 100) * this.totalPrice;
      this.totalPrice = this.totalPrice - this.discountValue;
      this.isCouponApplied = false;
      this.couponCode = 'NEC00020';

      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Coupon Applied',
        duration: 5000,
      });
    } else if (value === 15 && this.ringsCount >= 1) {
      this.discountValue = (value / 100) * this.totalPrice;
      this.totalPrice = this.totalPrice - this.discountValue;
      this.isCouponApplied = false;
      this.couponCode = 'RIN00015';

      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Coupon Applied',
        duration: 5000,
      });
    } else if (value === 25 && this.braceletCount >= 2) {
      this.discountValue = (value / 100) * this.totalPrice;
      this.totalPrice = this.totalPrice - this.discountValue;
      this.isCouponApplied = false;
      this.couponCode = 'BRC00025';

      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Coupon Applied',
        duration: 5000,
      });
    } else {
      this.toast.warning({
        detail: 'Invalid Coupon',
        summary: 'Please check coupon conditions',
        duration: 5000,
      });
    }
  }

  removeProduct(productId: any) {
    this._productCartService.removeProduct(productId);
    this._productCartService.getCartValue().subscribe((res: any) => {});
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Removed from cart',
      duration: 5000,
    });
  }
}
