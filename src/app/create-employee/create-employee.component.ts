import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee = {
    fullname: '',
    appoint: '',
    remainingleaves: '',
    empuniqueid: '',
    mobileno: '',
    office: '',
    password: '',
    username: ''
  };

  employees: any[] = []; // Array to hold fetched employee data

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchEmployees(); // Fetch employee data when the component initializes
  }

  onSubmit() {
    // Auto-generate the password and username
    const firstName = this.employee.fullname.split(' ')[0].toLowerCase();
    const mobileStart = this.employee.mobileno.substring(0, 3);
    this.employee.password = `${firstName}@${mobileStart}`;
    this.employee.username = this.employee.empuniqueid;

    const apiUrl = 'http://localhost:8080/api/admins/add-admin';
    this.http.post(apiUrl, this.employee).subscribe(
      (response) => {
        console.log('Employee added successfully:', response);
        alert('Employee added successfully!');
        this.resetForm();
        this.fetchEmployees(); // Refresh the employee list after adding a new employee
      },
      (error) => {
        console.error('Error adding employee:', error);
        alert('Error adding employee. Please try again.');
      }
    );
  }

  fetchEmployees() {
    // Fetch employees from the backend
    const apiUrl = 'http://localhost:8080/api/admins'; // Adjust the URL as needed
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.employees = data;
        console.log('Fetched employees:', this.employees);
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  resetForm() {
    this.employee = {
      fullname: '',
      appoint: '',
      remainingleaves: '',
      empuniqueid: '',
      mobileno: '',
      office: '',
      password: '',
      username: ''
    };
  }
}
