import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LisProductsComponent } from './components/lis-products/lis-products.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';

const routes: Routes = [
  {
  path: '',
  component: LisProductsComponent,
  },
  {
    path: 'create',
    component: CreateProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  
 }
