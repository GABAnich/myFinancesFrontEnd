import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-dialog-login-form',
  templateUrl: './dialog-login-form.component.html',
  styleUrls: ['./dialog-login-form.component.css']
})
export class DialogLoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hide = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}
