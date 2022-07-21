import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { FeatureModule } from '../feature/feature.module';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { AllBraceletProductsComponent } from './all-bracelet-products/all-bracelet-products.component';
import { AllEarringProductsComponent } from './all-earring-products/all-earring-products.component';
import { AllNecklaceProductsComponent } from './all-necklace-products/all-necklace-products.component';
import { AllRingsProductsComponent } from './all-rings-products/all-rings-products.component';
import { CheckoutScreenComponent } from './checkout-screen/checkout-screen.component';


@NgModule({
  declarations: [
    HomescreenComponent,
    BraceletComponent,
    SingleproductComponent,
    FilterProductComponent,
    AllBraceletProductsComponent,
    AllEarringProductsComponent,
    AllNecklaceProductsComponent,
    AllRingsProductsComponent,
    CheckoutScreenComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FeatureModule
  ]
})
export class ProductsModule { }
