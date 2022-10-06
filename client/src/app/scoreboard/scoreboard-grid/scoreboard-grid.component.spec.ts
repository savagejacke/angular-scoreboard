import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardGridComponent } from './scoreboard-grid.component';

describe('ScoreboardGridComponent', () => {
  let component: ScoreboardGridComponent;
  let fixture: ComponentFixture<ScoreboardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreboardGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreboardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
