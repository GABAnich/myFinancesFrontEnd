import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DialogLoginFormComponent } from '../dialog-login-form/dialog-login-form.component';
import { DialogRegistrationFormComponent } from '../dialog-registration-form/dialog-registration-form.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginDialog(): void {
    let dialogRef = this.dialog.open(DialogLoginFormComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);
    });
  }

  openRegistrationDialog(): void {
    let dialogRef = this.dialog.open(DialogRegistrationFormComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);
    });
  }

}
