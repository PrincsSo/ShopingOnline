import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [`
  .login1{
    position:relative;
    background-color:#28292d;
    left:420px;
    top:100px;
    text-align:center;
  }
  `  ]
})
export class AdminComponent implements OnInit {

  loginForm: FormGroup;

  constructor(fb: FormBuilder, private storeService: StoreService, private route: Router) {

    this.loginForm = fb.group({
      username: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      validate: ''
    });
  }

  ngOnInit() { }
  addUser() {
    this.storeService.addUser(this.loginForm.value).subscribe(response => { this.route.navigate(['/login']); });
  }
}
