// employee.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private router: Router) {}
  logout(): void {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
