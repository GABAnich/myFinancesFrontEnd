import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserServerService {
  httpOptions: Object;
  httpOptionsWithToken: Object;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  
    this.httpOptionsWithToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // get token from authService
        'x-access-token': 'get token from authSerice'
      })
    }
  }

  createUser(login, password, firstName, lastName) {
    return this.http.post('http://localhost:3000/users',
      { login, password, firstName, lastName },
      this.httpOptions);
  }


  getUserById(userId) {
    return this.http.get(`http://localhost:3000/users/id/${userId}`);
  }


  getUserByLogin(userLogin) {
    return this.http.get(`http://localhost:3000/users/login/${userLogin}`);
  }

  // Наступні методи потребують сервісу для зберігання токену

  // updateUserbyId


  // updateUserByLogin


  // deleteUserById


  // deleteUserByLogin
}
