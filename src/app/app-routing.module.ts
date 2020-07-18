import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ProductosComponent } from './productos/productos.component'
import { ContactoComponent } from './contacto/contacto.component';
import { OrdenaComponent } from './ordena/ordena.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "productos", component: ProductosComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "ordena", component: OrdenaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
