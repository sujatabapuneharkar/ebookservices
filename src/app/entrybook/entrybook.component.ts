import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrybook',
  templateUrl: './entrybook.component.html',
  styleUrl: './entrybook.component.css'
})
export class EntrybookComponent {

  constructor(private router: Router) {}
  logout(): void {
    this.router.navigate(['/login'], { replaceUrl: true });
  }

}
