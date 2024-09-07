// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { ClerkComponent } from './clerk/clerk.component';
import { HODComponent } from './hod/hod.component';
import { CEOComponent } from './ceo/ceo.component';
import { FooterComponent } from './footer/footer.component';
import { EmpsevapushtikaComponent } from './empsevapushtika/empsevapushtika.component';
import { NoteabtractComponent } from './noteabtract/noteabtract.component';
import { EntrybookComponent } from './entrybook/entrybook.component';
import { EmpentrybookComponent } from './empentrybook/empentrybook.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'clerk', component: ClerkComponent },
  { path: 'hod', component: HODComponent },
  { path: 'ceo', component: CEOComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'empsevapushtika', component: EmpsevapushtikaComponent },
  { path: 'noteabstract', component: NoteabtractComponent },
  { path: 'entrybook', component: EntrybookComponent }, 
  { path: 'empentrybook', component: EmpentrybookComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
