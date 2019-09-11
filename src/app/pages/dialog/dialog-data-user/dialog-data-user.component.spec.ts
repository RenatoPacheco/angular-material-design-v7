import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDataUserComponent } from './dialog-data-user.component';

describe('DialogDataUserComponent', () => {
  let component: DialogDataUserComponent;
  let fixture: ComponentFixture<DialogDataUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDataUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
