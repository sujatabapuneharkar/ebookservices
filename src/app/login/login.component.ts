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
      const { loginInput, password } = form.value;
      this.login(loginInput, password);
    } else {
      console.log('Form is invalid');
    }
  }

  login(identifier: string, password: string) {
    const isMobileNumber = /^\d{10}$/.test(identifier);
    const loginData = isMobileNumber 
      ? { mobileno: identifier, password } 
      : { username: identifier, password };

    this.http.post<any>('http://localhost:8080/api/admins/login', loginData)
      .subscribe(response => {
        if (response && response.fullname) {
          localStorage.setItem('employeeName', response.fullname); // Store fullname in local storage
          Swal.fire({
            title: 'Login Successful!',
            text: 'You have logged in successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
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
        this.router.navigate(['/employee']); // Redirect to employee dashboard
        break;
    }
  }
}
