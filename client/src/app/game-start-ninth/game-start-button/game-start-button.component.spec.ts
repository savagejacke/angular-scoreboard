import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStartButtonComponent } from './game-start-button.component';

describe('GameStartButtonComponent', () => {
  let component: GameStartButtonComponent;
  let fixture: ComponentFixture<GameStartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameStartButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameStartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
