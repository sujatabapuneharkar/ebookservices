import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-create-sevapushtika',
  templateUrl: './create-sevapushtika.component.html',
  styleUrls: ['./create-sevapushtika.component.css'],
})
export class CreateSevapushtikaComponent {
  sevaPushtika = {
    fullname: '',
    castreligion: '',
    currentaddress: '',
    declaredvillageadd: '',
    nameresidofvictim: '',
    writedobcorrect: '',
    exactheight: '',
    identifiedmarkonbody: '',
    eduatappoint: '',
    eduafterappoint: '',
    govsigndate: '',
    datesignnddesign: '',
    certnodate: '',
    officerdesign: '',
  };

  private apiUrl = 'http://localhost:8080/api/sevapushtika/add'; 

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log('Form data before submission:', this.sevaPushtika); 

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(this.apiUrl, this.sevaPushtika, { headers })
      .pipe(
        catchError(this.handleError) 
      )
      .subscribe({
        next: (response) => {
          alert('Data submitted successfully!');
          console.log('Response:', response); 
        },
        error: (error) => {
          alert('Error submitting data. Please try again.');
          console.error('Error details:', error); 
        }
      });
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Backend returned code:', error.status);
    console.error('Error body:', error.error);
    return throwError(() => new Error('Error submitting data, please try again.'));
  }
}
