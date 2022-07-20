import { Component, Input, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/services/product/products-api.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss'],
})
export class HomescreenComponent implements OnInit {
  allProducts!: [];
  allBracelets!: any;
  allNecklace!: any;
  allRings!:any;
  allEarrings!: any;


  constructor(private _productsApi: ProductsApiService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._productsApi.getAllProducts().subscribe((products: any) => {
      this.allProducts = products;
      this.filterProducts();
    });
  }

  filterProducts() {
    this.allBracelets = this.allProducts.filter((product:any)=>{
      return product.category === 'bracelet';
    })

    this.allEarrings = this.allProducts.filter((product:any)=>{
      return product.category === 'earring';
    })

    this.allNecklace = this.allProducts.filter((product:any)=>{
      return product.category === 'necklace';
    })

    this.allRings = this.allProducts.filter((product:any)=>{
      return product.category === 'ring';
    })
  }
}
