import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProdutsComponent } from './produts/produts.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'product', component:CreateProductComponent},
  {path:'products',component:ProdutsComponent},
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'product', component: DeleteProductComponent},
  {path:'updateproduct/:id', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
