import { Injectable } from '@angular/core';
import { UserServerService } from '../user-server.service';

@Injectable()
export class RegistrationFormService {

  constructor(private userServerService: UserServerService) { }

  register(formValues) {
    let { login, password, firstName, lastName } = formValues;

    // this.userServerService.getUserByLogin("email3@gmail.com").toPromise()
    //   .then(user => {
    //     console.log(user);
    //   });

    return this.userServerService.createUser(login, password, firstName, lastName).toPromise();
  }

}
