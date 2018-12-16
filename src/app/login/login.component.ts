import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToasterService } from 'angular2-toaster';

import { User } from './user';
import { USERS } from '../../mock/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private toasterService: ToasterService;

  constructor(
    toasterService: ToasterService,
    private router: Router,
  ) {
    this.toasterService = toasterService;
  }

  user = new User(0, '', '');

  submitted = false;

  onSubmit(user) {
    const isUserExist = this.checkIfUserIsExist(user);

    if (isUserExist) {
      this.toasterService.pop('success', 'You are logged in');
      this.submitted = true;
      this.router.navigate(['gallery']);
    } else {
      this.toasterService.pop('error', 'Validation error');
    }
  }

  checkIfUserIsExist(userToCheck): User | Boolean {
    return USERS.find(user => {
      return [
        user.id === userToCheck.id,
        user.name === userToCheck.name,
        user.password === userToCheck.password,
      ].every(isEq => Boolean(isEq));
    }) || false;
  }

  ngOnInit() {
  }

}
