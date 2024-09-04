import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.login(form.value.username, form.value.password);
    } else {
      console.log('Form is invalid');
    }
  }

  login(username: string, password: string) {
    // Add authentication logic here
    console.log(`Logged in with username: ${username} and password: ${password}`);
    alert('Login successful!');
    this.router.navigate(['/employee']); // Navigate to the desired page after successful login
  }
}
