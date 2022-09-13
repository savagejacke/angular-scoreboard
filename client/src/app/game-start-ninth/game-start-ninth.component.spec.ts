import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStartNinthComponent } from './game-start-ninth.component';

describe('GameStartNinthComponent', () => {
  let component: GameStartNinthComponent;
  let fixture: ComponentFixture<GameStartNinthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameStartNinthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameStartNinthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
