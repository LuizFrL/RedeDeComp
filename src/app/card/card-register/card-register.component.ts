import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent implements OnInit{
  cardForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      cardTitle: ['', Validators.required],
      cardDescription: ['', Validators.required]
    });
  }

  createCard(): void {
    const cardTitle: string = this.cardForm.value.cardTitle;
    const cardDescription: string = this.cardForm.value.cardDescription;
    console.log(cardDescription, cardTitle);
  }

}
