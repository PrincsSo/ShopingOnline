import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  template: `
    <h3>Admin Dashboard</h3>
    <li class="" (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="apple"> {{department.id}}</span>.<span class="apple2">{{department.name}}</span>
        <br><br>
        </li>
  `,
  styles: [`
  .apple{
    background-color:#2c2d2d;
  }
  .apple2{
    background-color:#454c4c;
  }
  `]
})
export class ListComponent implements OnInit {
  departments = [
    { id: 1, name: 'Users' },
    { Id: 2, name: 'Products' },
    { Id: 3, name: 'Add-Products' },
    { id: 4, name: 'Log-out' },
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSelect(department) {
    if (department.id === 1) {
      this.router.navigate(['/user']);
    } else if (department.id === 2) {
      this.router.navigate(['/product']);
    } else if (department.id === 3) {
    this.router.navigate(['/shop']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
