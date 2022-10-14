import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryRowComponent } from './secondary-row.component';

describe('SecondaryRowComponent', () => {
  let component: SecondaryRowComponent;
  let fixture: ComponentFixture<SecondaryRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
