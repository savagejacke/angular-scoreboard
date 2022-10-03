import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthFormComponent } from './ninth-form.component';

describe('NinthFormComponent', () => {
  let component: NinthFormComponent;
  let fixture: ComponentFixture<NinthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinthFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
