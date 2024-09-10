import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clerkshowsevapushtika',
  templateUrl: './clerkshowsevapushtika.component.html',
  styleUrls: ['./clerkshowsevapushtika.component.css']
})
export class ClerkshowsevapushtikaComponent implements OnInit {
  empData: any = {};

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const fullname = params['fullname'];
      if (fullname) {
        this.fetchEmployeeData(fullname);
      }
    });
  }

  fetchEmployeeData(fullname: string): void {
    this.http.get<any>(`http://localhost:8080/api/sevapushtika/fullname/${fullname}`).subscribe(
      (response) => {
        if (response && response.length > 0) {
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
