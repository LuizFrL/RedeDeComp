import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CardDatabaseService} from '../../core/card-database/card-database.service';
import {CardDatabaseShareService} from '../../core/card-database-share/card-database-share.service';
import { Card } from '../../core/card-database-share/card';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent implements OnInit{
  cardForm: FormGroup;
  card: Card;
  key = '';

  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardDatabaseService,
    private cardServiceShare: CardDatabaseShareService,
  ) {  }

  ngOnInit(): void {
    this.card = new Card();
    this.cardForm = this.formBuilder.group({
      cardTitle: ['', Validators.required],
      cardDescription: ['', Validators.required]
    });
    this.cardServiceShare.currentCard.subscribe( data => {
      if (data.key && data.card) {
        this.card = new Card();
        this.card.title = data.card.title;
        this.card.description = data.card.description;
        this.key = data.key;
      }
    });
  }

  createCard(): void {
    if (this.key){
      this.cardService.update(this.card, this.key);
    } else {
      this.cardService.insert(this.card);
    }
    this.card = new Card();
  }

}
