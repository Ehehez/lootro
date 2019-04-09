import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasListComponent} from './empresas-list/empresas-list.component';
import { EmpresasEditComponent } from './empresas-edit/empresas-edit.component';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'empresas-list',
    component: EmpresasListComponent
  },
  {
    path: 'empresas-add',
    component: EmpresasEditComponent
  },
  {
    path: 'empresas-edit/:id',
    component: EmpresasEditComponent
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
