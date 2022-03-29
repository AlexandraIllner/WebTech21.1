import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CreateComponent } from './create/create.component';
//import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { DevTableComponent } from './developers/dev-table/dev-table.component';
import { LangTableComponent } from './languages/lang-table/lang-table.component';
import { DevdetailComponent } from './developers/dev-detail/dev-detail.component';

import { LangDetailComponent } from './languages/lang-detail/lang-detail.component';
import { NewComponent } from './languages/new/new.component';
import { NewDevComponent } from './developers/newDev/newDev.component';
import { UpdateComponent } from './languages/update/update.component';


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
    path: "developer/:id",
    component: DevdetailComponent
  },
  {
    path: "newDev",
    component: NewDevComponent
  },
  {
    path: "langtable",
    component: LangTableComponent
  },
  {
    path: "language-update/:id",
    component: UpdateComponent
  },
  {
    path: "new",
    component: NewComponent
  }, 
  {
    path: "language-detail/:id",
    component: LangDetailComponent
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

