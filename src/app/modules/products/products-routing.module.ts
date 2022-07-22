import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplePdfViewerComponent } from 'src/app/example-pdf-viewer/example-pdf-viewer.component';
import { AllBraceletProductsComponent } from './all-bracelet-products/all-bracelet-products.component';
import { AllEarringProductsComponent } from './all-earring-products/all-earring-products.component';
import { AllNecklaceProductsComponent } from './all-necklace-products/all-necklace-products.component';
import { AllRingsProductsComponent } from './all-rings-products/all-rings-products.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { CheckoutScreenComponent } from './checkout-screen/checkout-screen.component';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

const routes: Routes = [
  {
    path: 'bracelet',
    pathMatch: 'full',
    component: BraceletComponent,
  },
  {
    path:'singleproduct/:cat/:id',
    pathMatch:'full',
    component:SingleproductComponent,
  },
  {
    path:'filterproduct/:cat',
    pathMatch:'full',
    component:FilterProductComponent,
  },
  {
    path:'allbracelets/:cat',
    pathMatch:'full',
    component:AllBraceletProductsComponent,
  },
  {
    path:'allearrings/:cat',
    pathMatch:'full',
    component:AllEarringProductsComponent,
  },
  {
    path:'allnecklace/:cat',
    pathMatch:'full',
    component:AllNecklaceProductsComponent,
  },
  {
    path:'allrings/:cat',
    pathMatch:'full',
    component:AllRingsProductsComponent,
  },
  {
    path: 'checkout',
    pathMatch: 'full',
    component: CheckoutScreenComponent,
  },
  {
    path: 'pdf-viewer',
    pathMatch: 'full',
    component: ExamplePdfViewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
