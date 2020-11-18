import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardDatabaseService} from '../../core/card-database/card-database.service';
import {Card} from '../../core/card-database-share/card';

@Component({
  selector: 'app-cards-shareable',
  templateUrl: './cards-shareable.component.html',
  styleUrls: ['./cards-shareable.component.css']
})
export class CardsShareableComponent implements OnInit {

  uid: string;
  rowCards: Card[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardDatabaseService
  ) { }

  ngOnInit(): void {
    this.uid = this.activatedRoute.snapshot.params.userUID;
    this.cardService.getCardsByUID(this.uid).subscribe( cards => {
      this.rowCards = this.cardService.groupColumns(cards, 4);
    });
  }


}
