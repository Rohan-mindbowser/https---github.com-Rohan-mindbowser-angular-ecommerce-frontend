import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './modules/products/homescreen/homescreen.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component:HomescreenComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
