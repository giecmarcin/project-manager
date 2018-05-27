import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonBrowserComponent } from './person-browser.component';

describe('PersonBrowserComponent', () => {
  let component: PersonBrowserComponent;
  let fixture: ComponentFixture<PersonBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
