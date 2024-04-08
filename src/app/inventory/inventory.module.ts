import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddProductsComponent,
    ViewProductsComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,ReactiveFormsModule
  ]
})
export class InventoryModule { }
