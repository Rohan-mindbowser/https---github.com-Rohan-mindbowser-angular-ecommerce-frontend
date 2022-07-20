import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BraceletComponent } from './bracelet/bracelet.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
