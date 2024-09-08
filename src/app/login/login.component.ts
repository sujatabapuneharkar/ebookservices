import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Get loginInput instead of username since the input field name is changed to loginInput
      const { loginInput, password } = form.value; 
      this.login(loginInput, password);
    } else {
      console.log('Form is invalid');
    }
  }

  login(identifier: string, password: string) {
    // Determine if the identifier is a mobile number or a username
    const isMobileNumber = /^\d{10}$/.test(identifier); // Check for 10-digit mobile number format
    const loginData = isMobileNumber 
      ? { mobileno: identifier, password } 
      : { username: identifier, password };

    this.http.post<any>('http://localhost:8080/api/admins/login', loginData)
      .subscribe(response => {
        if (response && response.appoint) {
          Swal.fire({
            title: 'Login Successful!',
            text: 'You have logged in successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            // Navigate based on appoint type
            this.navigateByAppoint(response.appoint);
          });
        } else {
          Swal.fire({
            title: 'Invalid Credentials',
            text: 'Invalid credentials or role not found',
            icon: 'error',
            confirmButtonText: 'Try Again'
          });
        }
      }, error => {
        console.error('Error during login:', error);
        Swal.fire({
          title: 'Login Failed',
          text: 'Login failed. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  }

  navigateByAppoint(appoint: string) {
    switch (appoint.toLowerCase()) {
      case 'clerk':
        this.router.navigate(['/clerk']);
        break;
      case 'hod':
        this.router.navigate(['/hod']);
        break;
      case 'ceo':
        this.router.navigate(['/ceo']);
        break;
      default:
        this.router.navigate(['/employee']); // Redirect all other roles as employees
        break;
    }
  }
}
