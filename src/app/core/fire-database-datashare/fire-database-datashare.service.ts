import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Card} from './card';

@Injectable({
  providedIn: 'root'
})
export class FireDatabaseDatashareService {
  private cardSource = new BehaviorSubject({card: null, key: ''});
  currentCard = this.cardSource.asObservable();

  constructor() { }

  changeCard(card: Card, key: string): void {
    this.cardSource.next({card, key});
  }
}
