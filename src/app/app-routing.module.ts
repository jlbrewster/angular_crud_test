import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/products', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'product-detail/:sku', component: ProductDetailComponent },
  { path: 'products', component: ProductListComponent },
  { path: '_mockProducts', component: ProductListComponent },
  { path: '_mockProducts/:sku', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
