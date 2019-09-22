import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

import { IUser, UserService } from 'src/services/user.service';
import { User } from 'src/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  btnLable = 'Logout';
  user: User;
  onLogoutClicked() {
    this.router.navigate(['']);
  }

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
