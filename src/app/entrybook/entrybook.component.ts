import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface EntryBook {
  entrytype: string;
  appointandsalary: string;
  natureofvacancy: string;
  addpayontransferappoint: string;
  dateofappoint: string;
  affordreasonforappoint: string;
  date: string;
  positionofappoint: string;
  salaryinperappoint: string;
  otherallowances: string;
  dateofexpireappoint: string;
  natureofleaveduration: string;
  punishmentetc: string;
}

@Component({
  selector: 'app-entrybook',
  templateUrl: './entrybook.component.html',
  styleUrls: ['./entrybook.component.css']
})
export class EntrybookComponent {
  entryBook: EntryBook = {
    entrytype: '',
    appointandsalary: '',
    natureofvacancy: '',
    addpayontransferappoint: '',
    dateofappoint: '',
    affordreasonforappoint: '',
    date: '',
    positionofappoint: '',
    salaryinperappoint: '',
    otherallowances: '',
    dateofexpireappoint: '',
    natureofleaveduration: '',
    punishmentetc: ''
  };

  private apiUrl = 'http://localhost:8080/api/entrybooks';

  constructor(private router: Router, private http: HttpClient) {}

  logout(): void {
    this.router.navigate(['/login']);
  }

  onSubmit(): void {
    this.http.post<EntryBook>(this.apiUrl, this.entryBook).subscribe({
      next: (response) => {
        alert('Entry Book successfully added!');
        // Reinitialize entryBook with default values
        this.entryBook = {
          entrytype: '',
          appointandsalary: '',
          natureofvacancy: '',
          addpayontransferappoint: '',
          dateofappoint: '',
          affordreasonforappoint: '',
          date: '',
          positionofappoint: '',
          salaryinperappoint: '',
          otherallowances: '',
          dateofexpireappoint: '',
          natureofleaveduration: '',
          punishmentetc: ''
        };
      },
      error: (error) => {
        alert('Failed to add Entry Book. Please try again.');
      }
    });
  }
}
