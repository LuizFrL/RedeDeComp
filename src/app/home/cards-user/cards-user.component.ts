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
  private cards$: Observable<any>;
  rowCards = [];
  constructor(
    private cardService: CardDatabaseService,
    private cardServiceShare: CardDatabaseShareService,
  ) { }

  ngOnInit(): void {
    this.cards$ = this.cardService.getAll();
    this.cards$.subscribe( cards => {
      this.rowCards = this.cardService.groupColumns(cards, 4);
    });

  }
  delete(key: string){
    this.cardService.delete(key);
  }

  edit(card: Card, key: string): void {
    this.cardServiceShare.changeCard(card, key);
  }

}
