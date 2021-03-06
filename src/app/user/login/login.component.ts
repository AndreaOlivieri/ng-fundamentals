import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName;
  password;
  mouseOverLogin;
  loginInvalid = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login(formValues) {
    const {
      userName,
      password
    } = formValues;

    this.authService
      .loginUser(userName, password)
      .subscribe(resp => {
        if (resp) {
          this.router.navigateByUrl('events');
        } else {
          this.loginInvalid = true;
        }
      });
  }

  cancel() {
    this.router.navigateByUrl('events');
  }

  setMouseOverLogin(isOver) {
    this.mouseOverLogin = isOver;
  }
}
