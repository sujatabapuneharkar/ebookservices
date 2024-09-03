import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isOtpSent = false;
  otp = ''; 
  generatedOtp: string = ''; 

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.sendOtp(form.value.username);
    } else {
      console.log('Form is invalid');
    }
  }

  generateOtp(): string {
    return (Math.floor(100000 + Math.random() * 900000)).toString();
  }

  sendOtp(mobileNumber: string) {
    this.generatedOtp = this.generateOtp(); 
    console.log(`OTP sent to mobile number: ${mobileNumber}. OTP: ${this.generatedOtp}`);
    this.isOtpSent = true;
    alert('OTP has been sent to your mobile number. Please enter the OTP to verify.');
  }

  verifyOtp() {
    if (this.otp === this.generatedOtp) {
      alert('OTP verified successfully!');
      this.router.navigate(['/employee']);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  }
}
