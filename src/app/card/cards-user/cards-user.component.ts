import { Component, OnInit } from '@angular/core';
import {CardDatabaseService} from '../../core/card-database/card-database.service';
import {CardDatabaseShareService} from '../../core/card-database-share/card-database-share.service';
import {Observable} from 'rxjs';
import {Card} from '../../core/card-database-share/card';

@Component({
  selector: 'app-cards-user',
  templateUrl: './cards-user.component.html',
  styleUrls: ['./cards-user.component.css']
})
export class CardsUserComponent implements OnInit {
  cards$: Observable<any>;
  constructor(
    private cardService: CardDatabaseService,
    private cardServiceShare: CardDatabaseShareService,
  ) { }

  ngOnInit(): void {
    this.cards$ = this.cardService.getAll();

  }
  delete(key: string){
    this.cardService.delete(key);
  }

  edit(card: Card, key: string): void {
    this.cardServiceShare.changeCard(card, key);
  }

}
