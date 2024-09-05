// clerk.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clerk',
  templateUrl: './clerk.component.html',
  styleUrls: ['./clerk.component.css']
})
export class ClerkComponent {

  constructor(private router: Router) {}
  logout(): void {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
