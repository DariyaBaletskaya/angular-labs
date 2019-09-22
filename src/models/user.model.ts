import { IUser } from '../services/user.service';

export class User implements IUser {
  username: string;
  password: string;
  country: string;
  gender: string;
  age: number;

  constructor(
    username = 'Dariya',
    password = 'qwerty',
    country = 'Ukraine',
    gender = 'female',
    age = 19
  ) {
    this.username = username;
    this.password = password;
    this.country = country;
    this.gender = gender;
    this.age = age;
  }
}
