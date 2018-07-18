import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Injectable()
export class LoginFormService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  authentication(formValues) {
    return this.http.post('http://localhost:3000/login', formValues, this.httpOptions).toPromise()
      .then((res: any) => {
        if (res.auth) {
          this.authService.saveToken(res.token);
          this.authService.saveLogin(formValues.login);
          this.authService.savePassword(formValues.password);
        }
      })
      .then(() => {
        return Promise.resolve();
      });
  }

}
