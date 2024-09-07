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
import { ClerkshowsevapushtikaComponent } from './clerkshowsevapushtika/clerkshowsevapushtika.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateSevapushtikaComponent } from './create-sevapushtika/create-sevapushtika.component';
import { UploadSevapushtikaComponent } from './upload-sevapushtika/upload-sevapushtika.component';

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
  { path: 'clerkshowsevapushtika', component: ClerkshowsevapushtikaComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'create-sevapushtika', component: CreateSevapushtikaComponent },
  { path: 'upload-sevapushtika', component: UploadSevapushtikaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
