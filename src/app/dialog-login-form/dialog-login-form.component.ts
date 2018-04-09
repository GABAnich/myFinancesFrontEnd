import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

}
