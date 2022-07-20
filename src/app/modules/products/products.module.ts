import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { EarringComponent } from './earring/earring.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { RingsComponent } from './rings/rings.component';
import { FeatureModule } from '../feature/feature.module';


@NgModule({
  declarations: [
    HomescreenComponent,
    BraceletComponent,
    EarringComponent,
    NecklaceComponent,
    RingsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FeatureModule
  ]
})
export class ProductsModule { }
