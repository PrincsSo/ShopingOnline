import { Component, OnInit } from '@angular/core';
import {StoreService} from '../store.service';


@Component({
  selector: 'app-user-show',
  template: `
    <p>List of users</p>
    <ul *ngFor="let lis of list">
      <li>{{lis.name}}</li>
    </ul>
  `,
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  public list: any;
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.list = this.storeService.getUser().subscribe( user => this.list = user);
  }

}
