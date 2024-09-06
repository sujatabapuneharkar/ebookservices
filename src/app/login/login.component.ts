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
      this.login(form.value.username, form.value.password);
    } else {
      console.log('Form is invalid');
    }
  }

  login(username: string, password: string) {
    this.http.post<any>('http://localhost:8080/api/admins/login', { mobileno: username, password: password })
      .subscribe(response => {
        if (response && response.appoint) {
          Swal.fire({
            title: 'Login Successful!',
            text: 'You have logged in successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            // Navigate based on appoint type
            switch (response.appoint.toLowerCase()) {
              case 'clerk':
                this.router.navigate(['/clerk']);
                break;
              case 'employee':
                this.router.navigate(['/employee']);
                break;
              case 'hod':
                this.router.navigate(['/hod']);
                break;
              case 'ceo':
                this.router.navigate(['/ceo']);
                break;
              // Add more cases as needed for different roles
              default:
                this.router.navigate(['/login']); // Default fallback
                break;
            }
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
}
