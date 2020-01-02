import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const firstName = new FormControl(this.authService.currentUser && this.authService.currentUser.firstName, [Validators.required]);
    const lastName = new FormControl(this.authService.currentUser && this.authService.currentUser.lastName, [Validators.required]);
    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }

  cancel() {
    this.router.navigateByUrl('/events');
  }

  saveProfile(formValues) {
    const {
      firstName,
      lastName
    } = formValues;

    this.authService.updateProfile({
        firstName,
        lastName
      })
      .subscribe(resp => {
        if (resp) {
          this.router.navigateByUrl('/events');
        }
      });
  }

  logout() {
    this.authService.logout()
      .subscribe(resp => {
        this.router.navigateByUrl('/user/login');
      });
  }

  isFirstNameValid() {
    const {firstName} = this.profileForm.controls;
    return firstName.valid || firstName.untouched;
  }

  isLastNameValid() {
    const {lastName} = this.profileForm.controls;
    return lastName.valid || !lastName.untouched;
  }
}
