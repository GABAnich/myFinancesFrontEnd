import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoginFormComponent } from './dialog-login-form.component';

describe('DialogLoginFormComponent', () => {
  let component: DialogLoginFormComponent;
  let fixture: ComponentFixture<DialogLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
