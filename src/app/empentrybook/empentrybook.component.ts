import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface Entry {
  id: number;
  fyYear: number;
  entrytype: string;
  date: string;
  status: string;
}

interface EntryDetails {
  appointandsalary: string;
  positionofappoint: string;
  salaryinperappoint: string;
  addpayontransferappoint: string;
  otherallowances: string;
  dateofappoint: string;
}

@Component({
  selector: 'app-empentrybook',
  templateUrl: './empentrybook.component.html',
  styleUrls: ['./empentrybook.component.css']
})
export class EmpentrybookComponent implements OnInit {
  fullname: string | null = null;
  entries: Entry[] = [];
  isPopupOpen = false;
  popupData: EntryDetails | null = null;
  private apiUrl = 'http://localhost:8080/api/entrybooks/fullname/';
  private detailsApiUrl = 'http://localhost:8080/api/entrybooks/details/'; // Ensure this is the correct endpoint

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.fullname = params['fullname'];
      if (this.fullname) {
        this.fetchEntries(this.fullname);
      }
    });
  }

  fetchEntries(fullname: string): void {
    this.http.get<Entry[]>(`${this.apiUrl}${fullname}`).subscribe(
      (response) => {
        this.entries = response;
      },
      (error) => {
        console.error('Error fetching entries:', error);
      }
    );
  }

  fetchEntryDetails(entryId: number): void {
    // Use the correct endpoint to fetch detailed data for the entry
    this.http.get<EntryDetails>(`${this.detailsApiUrl}${entryId}`).subscribe(
      (response) => {
        this.popupData = response;
      },
      (error) => {
        console.error('Error fetching entry details:', error);
      }
    );
  }

  openPopup(entryId: number) {
    this.fetchEntryDetails(entryId);
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.popupData = null; // Clear popup data when closing
  }
}
