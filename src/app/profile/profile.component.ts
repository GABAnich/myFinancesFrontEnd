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
  firstNamePlaceholder: string = '';
  lastNamePlaceholder: string = '';
  formError: string = '';

  constructor(private fb: FormBuilder,
    private userServerService: UserServerService,
    private authService: AuthService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.userServerService.getUserByLogin(this.authService.getLogin()).subscribe(
      (user: any) => {
        this.firstNamePlaceholder = user.firstName;
        this.lastNamePlaceholder = user.lastName;
      },
      err => console.error(err)
    );

    this.form.valueChanges.subscribe(
      () => {
        this.formError = '';
      }
    );
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
          this.formError = err.error.message;
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
        this.formError = err.error.message;
      }
    );
  }

}
