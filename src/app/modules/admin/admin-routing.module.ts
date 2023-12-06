import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from 'src/app/home/Layouts/home/home.component';
import { AdminHome } from './admin-home.component';

const routes: Routes = [{ path: '', component: AdminHome }];

@NgModule({
  declarations: [AdminHome],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
