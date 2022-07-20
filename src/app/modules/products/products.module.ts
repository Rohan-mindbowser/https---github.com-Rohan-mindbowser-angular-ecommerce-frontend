import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { FeatureModule } from '../feature/feature.module';
import { SingleproductComponent } from './singleproduct/singleproduct.component';


@NgModule({
  declarations: [
    HomescreenComponent,
    BraceletComponent,
    SingleproductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FeatureModule
  ]
})
export class ProductsModule { }
