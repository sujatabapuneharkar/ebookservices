import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

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
    // Check if the mobile number is valid
    if (!this.isValidMobileNumber(this.employee.mobileno)) {
      Swal.fire({
        title: 'Error!',
        text: 'Mobile number must be exactly 10 digits.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      return;
    }

    // Auto-generate the password and username
    const firstName = this.employee.fullname.split(' ')[0].toLowerCase();
    const mobileStart = this.employee.mobileno.substring(0, 3);
    this.employee.password = `${firstName}@${mobileStart}`;
    this.employee.username = this.employee.empuniqueid;

    const apiUrl = 'http://localhost:8080/api/admins/add-admin';
    this.http.post(apiUrl, this.employee).subscribe(
      (response) => {
        Swal.fire({
          title: 'Success!',
          text: 'Employee added successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        console.log('Employee added successfully:', response);
        this.resetForm();
        this.fetchEmployees(); // Refresh the employee list after adding a new employee
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Error adding employee. Please try again.',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
        console.error('Error adding employee:', error);
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

  isValidMobileNumber(mobileno: string): boolean {
    const mobilePattern = /^[0-9]{10}$/;
    return mobilePattern.test(mobileno);
  }

  deleteEmployee(fullname: string) {
    const apiUrl = `http://localhost:8080/api/admins/fullname/${fullname}`;
    this.http.delete(apiUrl).subscribe(
      () => {
        Swal.fire({
          title: 'Success!',
          text: 'Employee deleted successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.fetchEmployees(); // Refresh the employee list after deletion
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Error deleting employee. Please try again.',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
        console.error('Error deleting employee:', error);
      }
    );
  }
}
