import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsShareableComponent } from './cards-shareable.component';

describe('CardsShareableComponent', () => {
  let component: CardsShareableComponent;
  let fixture: ComponentFixture<CardsShareableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsShareableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsShareableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
