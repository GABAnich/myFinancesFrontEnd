import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class UserServerService {
  constructor(private http: HttpClient,
    private authService: AuthService) { }

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.authService.getToken()
      })
    }
  }

  createUser(login, password, firstName, lastName) {
    return this.http.post('http://localhost:3000/users',
      { login, password, firstName, lastName },
      this.getHttpOptions());
  }


  getUserById(userId) {
    return this.http.get(`http://localhost:3000/users/id/${userId}`);
  }


  getUserByLogin(userLogin) {
    return this.http.get(`http://localhost:3000/users/login/${userLogin}`);
  }

  updateUserbyId(userId, firstName, lastName) {
    return this.http.put(`http://localhost:3000/users/id/${userId}`,
      { firstName, lastName },
      this.getHttpOptions());
  }

  updateUserbyLogin(userLogin, firstName, lastName) {
    return this.http.put(`http://localhost:3000/users/login/${userLogin}`,
      { firstName, lastName },
      this.getHttpOptions());
  }


  deleteUserbyId(userId) {
    return this.http.delete(`http://localhost:3000/users/id/${userId}`,
      this.getHttpOptions());
  }

  deleteUserbyLogin(userLogin) {
    return this.http.delete(`http://localhost:3000/users/login/${userLogin}`,
      this.getHttpOptions());
  }
}
