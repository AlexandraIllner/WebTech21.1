import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DevTableComponent } from './dev-table/dev-table.component';
import { LangTableComponent } from './lang-table/lang-table.component';
import { DevdetailComponent } from './dev-detail/dev-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TesttableComponent } from './testtable/testtable.component';
import { LangDetailComponent } from './lang-detail/lang-detail.component';
import { NewComponent } from './new/new.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DevTableComponent,
    LangTableComponent,
    DevdetailComponent,
    TesttableComponent,
    LangDetailComponent,
    NewComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
