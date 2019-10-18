import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { UserService } from '../../services/user.service';
import { User } from 'src/models/user.model';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  btnLable = 'Sign in';
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuider: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuider.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      language: ['', Validators.required],
      gender: ['', Validators.required]
    });

    this.userService
      .loadUser()
      .subscribe(
        user =>
          (this.user = new User(
            user.username,
            user.email,
            user.password,
            user.language,
            user.gender
          ))
      );
  }

  login() {
    this.userService.setUser(
      new User(
        this.loginForm.controls.username.value,
        this.loginForm.controls.email.value,
        this.loginForm.controls.password.value,
        this.loginForm.controls.language.value,
        this.loginForm.controls.gender.value
      )
    );
  }

  redirectToProfile() {
    this.login();
    this.router.navigate(['/profile']);
  }
}
