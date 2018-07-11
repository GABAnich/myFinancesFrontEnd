import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LoginFormService } from './login-form.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [LoginFormService]
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  resourceLoading: boolean = false;
  hide: boolean = true;

  constructor(private fb: FormBuilder,
    private loginFormService: LoginFormService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      login: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  getLoginErrorMessage() {
    return this.form.get('login').hasError('required') ? 'You must enter a login' : '';
  }

  getPasswordErrorMessage() {
    return this.form.get('password').hasError('required') ? 'You must enter a password' : '';
  }

  login() {
    this.resourceLoading = true;
    this.loginFormService.authentication(this.form.value)
      .then(() => {
        this.resourceLoading = false;
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.error(err);
        this.resourceLoading = false;
      });
  }

}
