import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PasswordValidation } from './password-validation';
import { RegistrationFormService } from './registration-form.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  providers: [RegistrationFormService]
})
export class RegistrationFormComponent implements OnInit {
  form: FormGroup;

  hidePassword: boolean = true;
  hideRepeatPassword: boolean = true;
  resourceLoading: boolean = false;

  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private registrationFormService: RegistrationFormService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    let passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+=-\`<>?,./])[A-Za-z\d~!@#$%^&*()_+=-\`<>?,./]{8,}/;

    this.form = this.fb.group({
      login: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(passwordRe)])],
      repeatPassword: ['', Validators.compose([Validators.required])],
      firstName: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]+$/)])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]+$/)])]
    }, {
        validator: PasswordValidation.MatchPassword
      });
  }

  register() {
    event.preventDefault();

    this.resourceLoading = true;
    this.registrationFormService.register(this.form.value)
      .subscribe(
        () => {
          this.resourceLoading = false;
          this.router.navigate(['/']);
        },
        err => {
          this.resourceLoading = false;
          console.error(err);
          if ('error' in err && 'message' in err.error) {
            alert("You are not registered. Try again. " + err.error.message);
          }
        }
      );
  }

  getLoginErrorMessage() {
    return this.form.get('login').hasError('required') ? 'You must enter a login' :
      this.form.get('login') ? 'Not a valid email' :
        '';
  }

  getPasswordErrorMessage() {
    return this.form.get('password').hasError('required') ? 'You must enter a password' :
      this.form.get('password').hasError('pattern') ? 'Minimum 8 characters, at least one uppercase, lowercase, number and one special character' :
        '';
  }

  getRepeatPasswordErrorMessage() {
    return this.form.get('repeatPassword').hasError('required') ? 'You must repeat a password' :
      this.form.get('repeatPassword').hasError('MatchPassword') ? 'Passwords must match' :
        '';
  }

  getFirstNameErrorMessage() {
    return this.form.get('firstName').hasError('required') ? 'You must enter a first name' :
      this.form.get('firstName').hasError('pattern') ? 'Only letters' :
        '';
  }

  getLastNameErrorMessage() {
    return this.form.get('lastName').hasError('required') ? 'You must enter a last name' :
      this.form.get('lastName').hasError('pattern') ? 'Only letters' :
        '';
  }
}
