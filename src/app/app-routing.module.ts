import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryModule } from './inventory/inventory.module';

const routes: Routes = [
  {
    path: 'inventory',
    loadChildren: () =>
      import('./inventory/inventory.module').then(
        (file) => file.InventoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
