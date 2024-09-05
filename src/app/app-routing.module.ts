// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { ClerkComponent } from './clerk/clerk.component';
import { HODComponent } from './hod/hod.component';
import { CEOComponent } from './ceo/ceo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'clerk', component: ClerkComponent },
  { path: 'hod', component: HODComponent },
  { path: 'ceo', component: CEOComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
