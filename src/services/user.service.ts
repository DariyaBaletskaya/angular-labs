import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

import { User } from 'src/models/user.model';

export interface IUser {
  username: string;
  password: string;
  country: string;
  gender: string;
  age: number;
}

@Injectable()
export class UserService {
  user: User;
  constructor() {
    this.user = new User();
  }
  loadUser() {
    return of<IUser>(this.user).pipe(delay(2000));
  }
  setUser(user: User) {
    this.user = user;
    return user;
  }
  getUser() {
    return this.user;
  }
}
