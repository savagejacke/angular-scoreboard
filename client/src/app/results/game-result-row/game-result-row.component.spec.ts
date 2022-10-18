import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameResultRowComponent } from './game-result-row.component';

describe('GameResultRowComponent', () => {
  let component: GameResultRowComponent;
  let fixture: ComponentFixture<GameResultRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameResultRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameResultRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
