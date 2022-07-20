import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BraceletComponent } from './bracelet/bracelet.component';
import { EarringComponent } from './earring/earring.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { RingsComponent } from './rings/rings.component';

const routes: Routes = [
  {
    path: 'bracelet',
    pathMatch: 'full',
    component: BraceletComponent,
  },
  {
    path: 'earring',
    pathMatch: 'full',
    component: EarringComponent,
  },
  {
    path: 'necklace',
    pathMatch: 'full',
    component: NecklaceComponent,
  },
  {
    path: 'rings',
    pathMatch: 'full',
    component: RingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
