import { Component } from '@angular/core';

@Component({
  selector: 'app-empentrybook',
  templateUrl: './empentrybook.component.html',
  styleUrls: ['./empentrybook.component.css']
})
export class EmpentrybookComponent {
  isPopupOpen = false;

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }
}
