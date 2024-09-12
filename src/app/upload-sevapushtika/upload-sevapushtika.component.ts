import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-sevapushtika',
  templateUrl: './upload-sevapushtika.component.html',
  styleUrls: ['./upload-sevapushtika.component.css'],
})
export class UploadSevapushtikaComponent implements OnInit {
  fullname: string[] = [];
  selectedEmployee: string = '';
  year: string = '';
  date: string = '';
  photo: File | null = null;
  uploadedData: any[] = []; // Array to hold uploaded data fetched from the backend

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEmployeeFullNames();
    this.fetchUploadedData();
  }

  // Fetch employee full names to populate the dropdown
  fetchEmployeeFullNames(): void {
    this.http.get<string[]>('http://localhost:8080/api/admins/fullnames') // Updated API endpoint
      .subscribe(
        (response: string[]) => {
          console.log('Fetched employee names:', response); // Debugging line
          this.fullname = response;
        },
        (error) => {
          console.error('Error fetching employee names:', error);
        }
      );
  }

  // Fetch uploaded data from the backend to display in the table
  fetchUploadedData(): void {
    this.http.get<any[]>('http://localhost:8080/api/uploadsevapushtika/all')
      .subscribe(
        (response: any[]) => {
          this.uploadedData = response;
        },
        (error) => {
          console.error('Error fetching uploaded data:', error);
        }
      );
  }

  // Handle file input change
  onFileChange(event: any): void {
    this.photo = event.target.files[0];
  }

  // Upload the form data to the backend
  uploadSevaPushtika(): void {
    if (!this.year || !this.date || !this.selectedEmployee || !this.photo) {
      Swal.fire('Error', 'All fields are required.', 'error');
      return;
    }

    const formData = new FormData();
    formData.append('fullname', this.selectedEmployee);
    formData.append('year', this.year);
    formData.append('date', this.date);
    formData.append('photo', this.photo);

    this.http.post('http://localhost:8080/api/uploadsevapushtika/add', formData)
      .subscribe(
        () => {
          Swal.fire('Success', 'Data added successfully.', 'success');
          this.resetForm();
          this.fetchUploadedData(); // Refresh data after successful upload
        },
        (error) => {
          Swal.fire('Error', 'Failed to add data.', 'error');
          console.error('Error adding data:', error);
        }
      );
  }

  // Reset form fields after successful submission
  resetForm(): void {
    this.year = '';
    this.date = '';
    this.selectedEmployee = '';
    this.photo = null;
  }

  // View photo by opening in a new tab
  viewPhoto(id: number): void {
    const photoUrl = `http://localhost:8080/api/uploadsevapushtika/get-photo/${id}`;
    window.open(photoUrl, '_blank');
  }

  // Delete data from the backend
  deleteSevaPushtika(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "This will permanently delete the data!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/api/uploadsevapushtika/delete/${id}`)
          .subscribe(
            () => {
              Swal.fire('Deleted!', 'Data has been deleted.', 'success');
              this.fetchUploadedData(); // Refresh data after successful deletion
            },
            (error) => {
              Swal.fire('Error', 'Failed to delete data.', 'error');
              console.error('Error deleting data:', error);
            }
          );
      }
    });
  }
}
