// Import der Components, für die Routen angelegt werden
import { CityComponent } from './cities/city/city.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CitiesComponent } from './cities/cities.component';

import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'; //default, brauchen wir hier nicht
import { RouterModule, Routes } from '@angular/router';


// hier Routen eintragen: Dazu wird das routes-Array mit Objekten befüllt, die jeweils einen path-Eintrag und einen component-Eintrag erhalten. Ein solches Objekt legt fest, für welchen Pfad welche Komponente aufgerufen wird. 
const routes: Routes = [ 
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full' // Route wird nur aufgerufen, wenn nichts danach kommt, die URL also nicht nur Präfix einer längeren URL ist 
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "cities",
    component: CitiesComponent
  },
  {
    path: "cities/:id", //  :parameter -> zugriff in city.comp.ts 
    component: CityComponent
  }


]; 

@NgModule({
  declarations: [],
  imports: [
    //CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule], //ermöglicht Zugriff
  providers: []
})
export class AppRoutingModule { }
