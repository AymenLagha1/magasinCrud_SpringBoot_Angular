import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './components/categoryComponents/category-form/category-form.component';
import { CategoryListComponent } from './components/categoryComponents/category-list/category-list.component';
import { ClientFormComponent } from './components/clientComponents/client-form/client-form.component';
import { ClientListComponent } from './components/clientComponents/client-list/client-list.component';
import { CommandFormComponent } from './components/invoice/command-form/command-form.component';
import { CommandListComponent } from './components/invoice/command-list/command-list.component';
import { ProductAddComponent } from './components/productComponents/product-add/product-add.component';
import { ProductEditComponent } from './components/productComponents/product-edit/product-edit.component';
import { ProductsListComponent } from './components/productComponents/products-list/products-list.component';

const routes: Routes = [
  {path:'products', pathMatch:'full',component:ProductsListComponent},
  {path:'product/add', pathMatch:'full',component:ProductAddComponent},
  {path:'product/edit/:id', pathMatch:'full',component:ProductEditComponent},
  {path:'categories', pathMatch:'full',component:CategoryListComponent},
  {path:'category/add', pathMatch:'full',component:CategoryFormComponent},
  {path:'category/edit/:id', pathMatch:'full',component:CategoryFormComponent},
  {path:'commande/create', pathMatch:'full',component:CommandFormComponent},
  {path:'commandes', pathMatch:'full',component:CommandListComponent},
  {path:'clients', pathMatch:'full',component:ClientListComponent},
  {path:'client/add', pathMatch:'full',component:ClientFormComponent},
  {path:'client/edit/:id', pathMatch:'full',component:ClientFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



