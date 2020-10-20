import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      if (user) {
        this.route.navigate(['cards']);
      }
    });
  }

  loginWithGoogle(): void {
    this.userService.loginWithGoogle();
  }
}
