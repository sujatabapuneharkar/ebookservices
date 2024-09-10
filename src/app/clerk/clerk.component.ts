import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface EntryBook {
  id: number;
  fullname: string;
  count: number;
}

@Component({
  selector: 'app-clerk',
  templateUrl: './clerk.component.html',
  styleUrls: ['./clerk.component.css']
})
export class ClerkComponent implements OnInit {
  entryBooks: EntryBook[] = [];
  private apiUrl = 'http://localhost:8080/api/entrybooks/fullname/';
  private countApiUrl = 'http://localhost:8080/api/entrybooks/fullname/';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllEntryBooks();
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  getAllEntryBooks(): void {
    this.http.get<string[]>('http://localhost:8080/api/admins/fullnames').subscribe({
      next: (fullnames) => {
        fullnames.forEach((fullname) => {
          this.http.get<EntryBook[]>(`${this.apiUrl}${fullname}`).subscribe({
            next: (entries) => {
              entries.forEach(entry => {
                this.http.get<number>(`${this.countApiUrl}${fullname}/count`).subscribe({
                  next: (count) => {
                    entry.count = count;
                    this.entryBooks.push(entry);
                  },
                  error: (error) => console.error('Failed to fetch count for fullname', error)
                });
              });
            },
            error: (error) => console.error('Failed to fetch entries for fullname', error)
          });
        });
      },
      error: (error) => console.error('Failed to fetch full names', error)
    });
  }

  viewSevaPushtika(fullname: string): void {
    this.router.navigate(['/clerkshowsevapushtika'], { queryParams: { fullname } });
  }
}
