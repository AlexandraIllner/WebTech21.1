import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
//(0) httpclient für kommunikation mit backend via http
import { HttpClientModule } from '@angular/common/http';
//(2b) wird in detail.comp.ts verwendet
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    TableComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //(0)
    ReactiveFormsModule //(2b)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
