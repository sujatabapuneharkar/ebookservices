import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  fullname: string = '';
  leaveForm = {
    fullname: '',  // This will be auto-filled
    leavetype: '',
    fromDate: '',
    toDate: '',
    leavereason: ''
  };

  private loginApiUrl = 'http://localhost:8080/api/admins/login';
  private leaveApiUrl = 'http://localhost:8080/api/employee-leave/add';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.getFullName();
  }

  logout(): void {
    localStorage.removeItem('employeeName'); // Clear the employee name on logout
    this.router.navigate(['/login']);
  }

  getFullName(): void {
    this.fullname = localStorage.getItem('employeeName') || ''; // Retrieve fullname from local storage
    this.leaveForm.fullname = this.fullname; // Initialize the fullname field in leaveForm
  }

  onSubmit(): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(this.leaveApiUrl, this.leaveForm, { headers })
      .subscribe({
        next: (response) => {
          alert('Leave application submitted successfully!');
          console.log('Response:', response);
        },
        error: (error) => {
          alert('Error submitting leave application. Please try again.');
          console.error('Error details:', error);
        }
      });
  }
}
