import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ceo',
  templateUrl: './ceo.component.html',
  styleUrl: './ceo.component.css'
})
export class CEOComponent {

  constructor(private router: Router) {}
  logout(): void {
    this.router.navigate(['/login'], { replaceUrl: true });
  }

}
