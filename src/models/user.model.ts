import { IUser } from '../services/user.service';

export class User implements IUser {
  username: string;
  email: string;
  password: string;
  city: string;
  gender: string;

  constructor(
    username = 'Dariya',
    email = 'demo@demo.com',
    password = 'qwerty',
    city = 'Odessa',
    gender = 'female'
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.city = city;
    this.gender = gender;
  }
}
