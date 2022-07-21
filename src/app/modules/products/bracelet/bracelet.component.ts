import { Component, Input, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart/add-to-cart.service';
import { AddToWishlistService } from 'src/app/services/add-to-wishlist/add-to-wishlist.service';

@Component({
  selector: 'app-bracelet',
  templateUrl: './bracelet.component.html',
  styleUrls: ['./bracelet.component.scss'],
})
export class BraceletComponent implements OnInit {
  constructor(private _addToCartService: AddToCartService,
    private _addToWishListService:AddToWishlistService) {}

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
    alert('Product Added in Cart');
  }

  addToWishList(id:any){
    this.pushProductToWishList = this.braceletProducts.filter((element: any) => {
      return element['_id'] == id;
    });
    this._addToWishListService.setWishList(this.pushProductToWishList[0]);
    alert("Product Add in wishlist")
  }
}
