import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPrisonersRowComponent } from './no-prisoners-row.component';

describe('NoPrisonersRowComponent', () => {
  let component: NoPrisonersRowComponent;
  let fixture: ComponentFixture<NoPrisonersRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPrisonersRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPrisonersRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
