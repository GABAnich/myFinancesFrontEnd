import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-registration-form',
  templateUrl: './dialog-registration-form.component.html',
  styleUrls: ['./dialog-registration-form.component.css']
})
export class DialogRegistrationFormComponent implements OnInit {

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<DialogRegistrationFormComponent>) { }

  ngOnInit() {
  }

  hidePassword = true;
  hideRepeatPassword = true;
  resourceLoading = false;

  data = {
    login: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: ''
  }

  register() {
    this.resourceLoading = true;

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post('http://localhost:3000/users', this.data, httpOptions).subscribe(
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
}
