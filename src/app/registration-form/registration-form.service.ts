import { Injectable } from '@angular/core';
import { UserServerService } from '../user-server.service';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable()
export class RegistrationFormService {

  constructor(private userServerService: UserServerService,
    private authService: AuthService) { }

  register(formValues) {
    let { login, password, firstName, lastName } = formValues;

    return this.userServerService.createUser(login, password, firstName, lastName)
      .pipe(
        tap((user: any) => {
          this.authService.saveToken(user.token);
          this.authService.saveLogin(login);
          this.authService.savePassword(password);
        }
        ));
  }

}
