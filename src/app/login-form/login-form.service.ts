import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from '../../../node_modules/rxjs/Subscription';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class LoginFormService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  authentication(formValues) {
    return this.http.post('http://localhost:3000/login', formValues, this.httpOptions).toPromise()
      .then(res => {
        console.log(res);
        // Store token in auth service
      })
      .then(() => {
        return Promise.resolve();
      });
  }

}
