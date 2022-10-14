import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionInputsComponent } from './action-inputs.component';

describe('ActionInputsComponent', () => {
  let component: ActionInputsComponent;
  let fixture: ComponentFixture<ActionInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
