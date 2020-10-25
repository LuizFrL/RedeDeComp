import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject, Observable} from 'rxjs';
import {auth} from 'firebase';
import {Router} from '@angular/router';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private KEY = 'user';
  user$ = new BehaviorSubject( JSON.parse(localStorage.getItem(this.KEY)));
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router
  ) {
    fireAuth.authState.subscribe(user => {
      if (user) {
        this.updateUserStatus(user);
      }
    });
  }

  async loginWithGoogle(): Promise<void> {
    const credentials = await this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider());
    this.user$.next(credentials.user);
    localStorage.setItem(this.KEY, JSON.stringify(credentials.user));
  }

  async logOut() {
    await this.fireAuth.signOut().then(() => {
      localStorage.removeItem(this.KEY);
      this.updateUserStatus(null);
    });
    return this.router.navigate(['']);
  }

  getUser(): Observable<any> {
    return this.user$.asObservable();
  }

  private updateUserStatus(user): void {
    this.user$.next(user);
  }

  private getUserLocal(): User {
    return JSON.parse(localStorage.getItem(this.KEY));
  }
  isLogged(): boolean {
    return !!JSON.parse(localStorage.getItem(this.KEY));
  }

  getUserUid(): string {
    return JSON.parse(localStorage.getItem(this.KEY))?.uid;
  }
}
