import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/user/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$: Observable<any>;

  constructor(
    private userService: UserService
  ) {
    this.user$ = this.userService.getUser();
  }

  ngOnInit(): void {
  }

  logOut() {
    this.userService.logOut();
  }
}
