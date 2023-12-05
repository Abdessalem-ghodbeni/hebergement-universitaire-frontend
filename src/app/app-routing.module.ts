import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './modules/admin/layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  { path:"back",loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)},
  { path:"front",loadChildren:()=>import('./modules/etudiant/etudiant.module').then(m=>m.EtudiantModule)},
  {path:"admin",component:AdminLayoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
