import { IUser } from '../services/user.service';

export class User implements IUser {
  username: string;
  email: string;
  password: string;
  language: string;
  gender: string;

  constructor(
    username = 'Dariya',
    email = 'demo@demo.com',
    password = 'qwerty',
    language = 'English',
    gender = 'female'
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.language = language;
    this.gender = gender;
  }
}
