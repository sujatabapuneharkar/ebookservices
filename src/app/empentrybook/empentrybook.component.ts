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

  appointandsalary: string = '';
  positionofappoint: string = '';
  salaryinperappoint: string = '';
  addpayontransferappoint: string = '';
  otherallowances: string = '';
  dateofappoint: string = '';

  private apiUrl = 'http://localhost:8080/api/entrybooks/fullname/';
  private detailsApiUrl = 'http://localhost:8080/api/entrybooks/details/';

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

  handleEntryDetails(entryId: number): void {
    this.fetchEntryDetails(entryId); // Fetch details
    this.openPopup(); // Open popup
  }

  fetchEntryDetails(entryId: number): void {
    this.http.get<EntryDetails>(`${this.detailsApiUrl}${entryId}`).subscribe(
      (response) => {
        this.popupData = response;
        // Populate temporary variables with fetched data
        this.appointandsalary = response.appointandsalary;
        this.positionofappoint = response.positionofappoint;
        this.salaryinperappoint = response.salaryinperappoint;
        this.addpayontransferappoint = response.addpayontransferappoint;
        this.otherallowances = response.otherallowances;
        this.dateofappoint = response.dateofappoint;
      },
      (error) => {
        console.error('Error fetching entry details:', error);
      }
    );
  }

  openPopup(): void {
    this.isPopupOpen = true;
  }

  closePopup(): void {
    this.isPopupOpen = false;
    this.popupData = null; // Clear data when closing
  }

  updatePopupData(): void {
    if (this.popupData) {
      this.popupData.appointandsalary = this.appointandsalary;
      this.popupData.positionofappoint = this.positionofappoint;
      this.popupData.salaryinperappoint = this.salaryinperappoint;
      this.popupData.addpayontransferappoint = this.addpayontransferappoint;
      this.popupData.otherallowances = this.otherallowances;
      this.popupData.dateofappoint = this.dateofappoint;
    }
  }
}
