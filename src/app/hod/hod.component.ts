import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrl: './hod.component.css'
})
export class HODComponent {
  constructor(private router: Router) {}
  logout(): void {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
