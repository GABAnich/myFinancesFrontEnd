import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {
  token: string = undefined;
  login: string = undefined;
  password: string = undefined;

  constructor(private cookieService: CookieService) { }

  getToken() {
    if (this.token !== undefined) {
      return this.token;
    } else if (this.cookieService.check('token')) {
      return this.cookieService.get('token');
    } else {
      return undefined;
    }
  }

  getLogin() {
    if (this.login !== undefined) {
      return this.login;
    } else if (this.cookieService.check('login')) {
      return this.cookieService.get('login');
    } else {
      return undefined;
    }
  }

  getPassword() {
    if (this.password !== undefined) {
      return this.password;
    } else if (this.cookieService.check('password')) {
      return this.cookieService.get('password');
    } else {
      return undefined;
    }
  }

  saveToken(token: string) {
    this.cookieService.set('token', token);
    this.token = token;
  }

  saveLogin(login: string) {
    this.cookieService.set('login', login);
    this.login = login;
  }

  savePassword(password: string) {
    this.cookieService.set('password', password);
    this.password = password;
  }

  logOut() {
    this.cookieService.delete('token');
    this.cookieService.delete('login');
    this.cookieService.delete('password');
    this.token = undefined;
    this.login = undefined;
    this.password = undefined;
  }

}
