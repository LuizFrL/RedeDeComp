import { Component } from '@angular/core';
import {UserService} from '../../core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService) { }

  loginWithGoogle(): void {
    this.userService.loginWithGoogle();
  }
}
