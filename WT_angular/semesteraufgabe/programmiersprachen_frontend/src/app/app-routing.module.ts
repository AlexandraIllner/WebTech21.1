import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//import { LangTableComponent } from './lang-table/lang-table.component';
import { TableExpandableRowsExample } from './table-expandable-rows-example/table-expandable-rows-example';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { DevtableComponent } from './devtable/devtable.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate: [AuthguardGuard]
  },
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
    //canActivate: [AuthguardGuard]
  },
  {
    path: "table",
    component: TableComponent
    //canActivate: [AuthguardGuard]
  },
  {
    path: 'table-expandable-rows-example',
    component: TableExpandableRowsExample
    //canActivate: [AuthguardGuard]
  }
  ,
  {
    path: 'devtable',
    component: DevtableComponent
    //canActivate: [AuthguardGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
