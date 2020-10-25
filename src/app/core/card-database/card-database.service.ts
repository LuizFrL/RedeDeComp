import {Injectable} from '@angular/core';
import {Card} from '../card-database-share/card';
import {AngularFireDatabase} from '@angular/fire/database';
import {UserService} from '../user/user.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardDatabaseService {

  private userUID: string;
  constructor(
    private db: AngularFireDatabase,
    private userService: UserService
  ) {
    userService.getUser().subscribe( user => {
        this.userUID = userService.getUserUid();
    });
  }

  insert(card: Card): void {
    this.db.list(this.userUID + '/card').push(card);
  }

  update(card: Card, key: string): void {
    this.db.list(this.userUID + '/card').update(key, card);
  }

  getAll(): any {
    return this.db.list(this.userUID + '/card')
      .snapshotChanges().pipe(
        map(changes => {
          // @ts-ignore
          return changes.map( c => ({key: c.payload.key, ...c.payload.val() }));
        })
      );
  }
  delete(key: string): void {
    this.db.object(`${this.userUID}/card/${key}`).remove();
  }

}
