import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardDatabaseService} from '../../core/card-database/card-database.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cards-shareable',
  templateUrl: './cards-shareable.component.html',
  styleUrls: ['./cards-shareable.component.css']
})
export class CardsShareableComponent implements OnInit {

  uid: string;
  cards$: Observable<any>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardDatabaseService
  ) { }

  ngOnInit(): void {
    this.uid = this.activatedRoute.snapshot.params.userUID;
    this.cards$ = this.cardService.getCardsByUID(this.uid);
  }


}
