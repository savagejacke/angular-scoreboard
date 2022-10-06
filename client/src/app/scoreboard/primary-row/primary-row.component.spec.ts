import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryRowComponent } from './primary-row.component';

describe('PrimaryRowComponent', () => {
  let component: PrimaryRowComponent;
  let fixture: ComponentFixture<PrimaryRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
