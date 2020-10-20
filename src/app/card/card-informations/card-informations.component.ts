import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-informations',
  templateUrl: './card-informations.component.html',
  styleUrls: ['./card-informations.component.css']
})
export class CardInformationsComponent implements OnInit {
  @Input() description: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
