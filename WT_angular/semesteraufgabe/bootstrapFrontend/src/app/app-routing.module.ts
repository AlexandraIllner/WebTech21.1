import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CreateComponent } from './create/create.component';
//import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { DevTableComponent } from './dev-table/dev-table.component';
import { LangTableComponent } from './lang-table/lang-table.component';
import { DevdetailComponent } from './dev-detail/dev-detail.component';
import { TesttableComponent } from './testtable/testtable.component';


const routes: Routes = [{
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "devtable",
    component: DevTableComponent
  },
  {
    path: "langtable",
    component: LangTableComponent
  },
  {
    path: "developer/:id",
    component: DevdetailComponent
  },
  {
    path: "test",
    component: TesttableComponent
  }
];
  
  
  /* ,
  {
    path: "member",
    component: CreateComponent
  },
  {
    path: "member/:id",
    component: DetailComponent
  }] */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

