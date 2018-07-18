import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';

@Injectable()
export class LoginServerService {

  constructor(private http: HttpClient) { }

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  authentication(login, password) {
    return this.http.post('http://localhost:3000/login',
      { login, password },
      this.getHttpOptions());
  }

}
