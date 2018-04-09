import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegistrationFormComponent } from './dialog-registration-form.component';

describe('DialogRegistrationFormComponent', () => {
  let component: DialogRegistrationFormComponent;
  let fixture: ComponentFixture<DialogRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
