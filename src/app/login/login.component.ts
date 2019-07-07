import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StoreService} from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  .login1{
    position:relative;
    background-color:#28292d;
    left:420px;
    top:100px;
    text-align:center;
  }
  `]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  name = '';
  pass = ''
  descripiton: '';

  constructor(fb: FormBuilder, private storeService: StoreService, private route: Router) {
    this.loginForm = fb.group({
      name: [null, Validators.required],
      pass: [null, Validators.required],
      validate: ''
    });
  }

  ngOnInit() {
  }
  addUser(): any {
    const found = this.addUser().find(u => u.loginForm.value.name ===
        this.storeService.getUser() && u.loginForm.value.pass === this.storeService.getUser());
    if (found) {
      this.route.navigate(['/list']);
    } else {
      alert('Invalid Input');
    }
  }
}

