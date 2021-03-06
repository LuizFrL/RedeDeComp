import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LogindGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }
  canActivate( router: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.userService.isLogged()) {
      return true;
    }
    this.router.navigate(['cards']);
    return false;
  }
}
