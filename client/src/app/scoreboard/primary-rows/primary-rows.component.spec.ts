import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryRowsComponent } from './primary-rows.component';

describe('PrimaryRowsComponent', () => {
  let component: PrimaryRowsComponent;
  let fixture: ComponentFixture<PrimaryRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryRowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
