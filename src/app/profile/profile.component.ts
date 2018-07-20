import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { UserServerService } from '../user-server.service';
import { AuthService } from '../auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  resourceLoading: boolean = false;

  constructor(private fb: FormBuilder,
    private userServerService: UserServerService,
    private authService: AuthService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]+$/)])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]+$/)])]
    });
  }

  update() {
    this.resourceLoading = true;
    this.userServerService.updateUserbyLogin(this.authService.getLogin(),
      this.form.value.firstName,
      this.form.value.lastName).subscribe(
        () => {
          this.resourceLoading = false;
          this.router.navigate(['/']);
        },
        err => {
          this.resourceLoading = false;
          console.log(err);
        });
  }

  deleteUser() {
    this.resourceLoading = true;
    this.userServerService.deleteUserbyLogin(this.authService.getLogin()).subscribe(
      () => {
        this.resourceLoading = false;
        this.authService.logOut();
        this.router.navigate(['/']);
      },
      err => {
        this.resourceLoading = false;
        console.error(err);
      }
    );
  }

}
