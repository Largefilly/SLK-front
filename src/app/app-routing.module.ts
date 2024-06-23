import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginStaffComponent } from './components/login-staff/login-staff.component';
import { LoginSpectComponent } from './components/login-spect/login-spect.component';
import { OrdenComponent } from './components/orden/orden.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login-staff', component: LoginStaffComponent },
  { path: 'login-spect', component: LoginSpectComponent },
  { path: 'order', component: OrdenComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }