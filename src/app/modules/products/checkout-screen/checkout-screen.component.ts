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

  applyCouponObjectReturn = {};
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

    let applyCouponObject = {
      braceletCount: this.braceletCount,
      earringCount: this.earringsCount,
      necklaceCount: this.necklaceCount,
      ringsCount: this.ringsCount,
      percentValue: value,
      totalPrice: this.totalPrice,
    };

    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(
        new URL('/src/app/services/apply-coupon.worker', import.meta.url)
      );
      worker.onmessage = ({ data }) => {
        if (data) {
          (this.totalPrice = data.totalPrice),
            (this.discountValue = data.discountValue),
            (this.applyCouponObjectReturn = data);
          this.couponCode = data.couponCode;
          this.isCouponApplied = data.isCouponApplied;
          this.toast.success({
            detail: 'SUCCESS',
            summary: `${this.couponCode} Applied`,
            duration: 5000,
          });
        } else {
          this.toast.warning({
            detail: 'Invalid Coupon',
            summary: 'Please check coupon conditions',
            duration: 5000,
          });
        }
      };
      worker.postMessage(applyCouponObject);
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
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
