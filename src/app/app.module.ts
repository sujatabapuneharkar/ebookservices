import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { ClerkComponent } from './clerk/clerk.component';
import { HODComponent } from './hod/hod.component';
import { CEOComponent } from './ceo/ceo.component';
import { EntrybookComponent } from './entrybook/entrybook.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    EmployeeComponent,
    ClerkComponent,
    HODComponent,
    CEOComponent,
    EntrybookComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
