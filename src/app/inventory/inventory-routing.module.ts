import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddProductsComponent,
  },
  {
    path: 'view',
    component: ViewProductsComponent,
  },
  {
    path: 'edit/:data',
    component: AddProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
