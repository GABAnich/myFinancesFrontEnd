import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenService {
  token: string = undefined;

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

  saveToken(token: string) {
    this.cookieService.set('token', token);
    this.token = token;
  }

  logOut() {
    this.cookieService.delete('token');
    this.token = undefined;
  }

}
