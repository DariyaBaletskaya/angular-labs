import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  btnLable = 'Login';
  lables = ['username', 'password', 'country', 'gender', 'age'];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService
      .loadUser()
      .subscribe(
        user =>
          (this.user = new User(
            user.username,
            user.password,
            user.country,
            user.gender,
            user.age
          ))
      );
  }

  login() {
    this.userService.setUser(this.user);
  }

  redirectToProfile() {
    this.login();
    this.router.navigate(['/profile']);
  }
}
