import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './guards/authguard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

 //(1) routen zu den einzelnen components als json dem routes-array übergeben mit pfad-angabe und ggf. guard-fkt
 //(1) importe oben über quick fix
const routes: Routes = [{
  path: '',
  component: HomeComponent,
  //canActivate: [AuthguardGuard]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent,
  //canActivate: [AuthguardGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
