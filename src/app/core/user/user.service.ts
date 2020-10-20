import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {auth, User} from 'firebase';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$ = new BehaviorSubject(null);
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router
  ) {
    fireAuth.authState.subscribe( user => {
      if (user) {
        this.updateUserStatus(user);
      }
    });
  }

  async loginWithGoogle(): Promise<void> {
    const credentials = await this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider());
    this.user$.next(credentials.user);
    await this.router.navigate(['cards']);
  }

  async logOut() {
    await this.fireAuth.signOut();
    this.updateUserStatus(null);
    return this.router.navigate(['']);
  }

  getUser(): Observable<User>{
    return this.user$.asObservable();
  }

  private updateUserStatus(user: firebase.User | null): void {
    this.user$.next(user);
  }
}
