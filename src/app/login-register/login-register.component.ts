import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  get token(): string {
    return this.authService.getToken();
  }

  get login(): string {
    return this.authService.getLogin();
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.checkData();
    console.log('Check data');
  }

  logOut() {
    this.authService.logOut();
  }

}
