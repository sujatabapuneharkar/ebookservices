import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-empsevapushtika',
  templateUrl: './empsevapushtika.component.html',
  styleUrls: ['./empsevapushtika.component.css']
})
export class EmpsevapushtikaComponent implements OnInit {
  fullname: string = '';
  empData: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch the logged-in employee's full name from local storage
    this.fullname = localStorage.getItem('employeeName') || '';

    // Fetch SevaPushtika data for the employee
    if (this.fullname) {
      this.fetchEmployeeData(this.fullname);
    }
  }

  fetchEmployeeData(fullname: string): void {
    this.http
      .get<any>(`http://localhost:8080/api/sevapushtika/fullname/${fullname}`)
      .subscribe(
        (response) => {
          if (response && response.length > 0) {
            // Assuming the API returns an array of records, take the first one
            this.empData = response[0];
          } else {
            console.log('No matching SevaPushtika data found.');
          }
        },
        (error) => {
          console.error('Error fetching SevaPushtika data:', error);
        }
      );
  }
}
