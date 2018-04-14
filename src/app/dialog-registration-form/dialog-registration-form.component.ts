import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { PasswordValidation } from './password-validation';

@Component({
  selector: 'app-dialog-registration-form',
  templateUrl: './dialog-registration-form.component.html',
  styleUrls: ['./dialog-registration-form.component.css']
})
export class DialogRegistrationFormComponent implements OnInit {
  form: FormGroup;

  hidePassword = true;
  hideRepeatPassword = true;
  resourceLoading = false;

  constructor(private http: HttpClient,
              public dialogRef: MatDialogRef<DialogRegistrationFormComponent>,
              private fb: FormBuilder) {
                this.createForm();
              }

  ngOnInit() {
  }

  createForm() {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    let passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+=-\`<>?,./])[A-Za-z\d~!@#$%^&*()_+=-\`<>?,./]{8,}/;

    this.form = this.fb.group({
      login: ['', Validators.compose([ Validators.required, Validators.email ]) ],
      password: ['', Validators.compose([ Validators.required, Validators.pattern(passwordRe) ]) ],
      repeatPassword: ['', Validators.compose([ Validators.required ]) ],
      firstName: ['', Validators.compose([ Validators.required, Validators.pattern(/^[a-zA-Z]+$/) ]) ],
      lastName: ['', Validators.compose([ Validators.required, Validators.pattern(/^[a-zA-Z]+$/) ]) ]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }  

  register() {
    console.log(this.form);

    this.resourceLoading = true;

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post('http://localhost:3000/users', this.form.value, httpOptions).subscribe(
      (value) => {
        this.resourceLoading = false;
        this.dialogRef.close();  
      },
      (error) => {
        alert("You are not registered. Try again.");
        this.resourceLoading = false;
        console.error(error);
      },
      () => {
        // console.log('Complate');
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
    return this.form.get('firstName').hasError('required') ? 'You must repeat a password' :
        this.form.get('firstName').hasError('pattern') ? 'Only letters' :
          '';
  }

  getLastNameErrorMessage() {
    return this.form.get('lastName').hasError('required') ? 'You must repeat a password' :
        this.form.get('lastName').hasError('pattern') ? 'Only letters' :
          '';
  }
}
