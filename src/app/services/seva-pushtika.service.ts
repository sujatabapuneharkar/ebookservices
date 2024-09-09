import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SevaPushtikaService {
  private apiUrl = 'http://localhost:8080/api/sevapushtika/add';

  constructor(private http: HttpClient) {}

  addSevaPushtika(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, data, { headers }).pipe(
      catchError(this.handleError) // Handle errors here
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Backend returned code:', error.status);
    console.error('Error body:', error.error);
    return throwError(() => new Error('Error submitting data, please try again.'));
  }
}
