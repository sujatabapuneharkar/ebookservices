import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-sevapushtika',
  templateUrl: './create-sevapushtika.component.html',
  styleUrls: ['./create-sevapushtika.component.css'],
})
export class CreateSevapushtikaComponent implements OnInit {
  sevaPushtika = {
    fullname: '',
    empuniqueid: '',
    appoint: '',
    office: '',
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

  fullNames: string[] = [];
  admins: any[] = []; // To store the full admin objects

  private adminsApiUrl = 'http://localhost:8080/api/admins';
  private sevaPushtikaApiUrl = 'http://localhost:8080/api/sevapushtika/add';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadFullNames();
  }

  loadFullNames() {
    this.http.get<any[]>(this.adminsApiUrl)
      .pipe(catchError(this.handleError))
      .subscribe({
        next: (admins) => {
          this.admins = admins;
          this.fullNames = admins.map(admin => admin.fullname);
        },
        error: (error) => {
          console.error('Error fetching full names:', error);
        }
      });
  }

  onNameSelected(event: any) {
    const selectedName = event.target.value;
    const selectedAdmin = this.admins.find(admin => admin.fullname === selectedName);
    if (selectedAdmin) {
      this.sevaPushtika.fullname = selectedAdmin.fullname;
      this.sevaPushtika.empuniqueid = selectedAdmin.empuniqueid;
      this.sevaPushtika.appoint = selectedAdmin.appoint;
      this.sevaPushtika.office = selectedAdmin.office;
    }
  }

  onSubmit() {
    console.log('Form data before submission:', this.sevaPushtika);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(this.sevaPushtikaApiUrl, this.sevaPushtika, { headers })
      .pipe(catchError(this.handleError))
      .subscribe({
        next: (response) => {
          Swal.fire({
            title: 'Success!',
            text: 'Data submitted successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          console.log('Response:', response);
        },
        error: (error) => {
          Swal.fire({
            title: 'Error',
            text: 'Error submitting data. Please try again.',
            icon: 'error',
            confirmButtonText: 'Try Again'
          });
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
