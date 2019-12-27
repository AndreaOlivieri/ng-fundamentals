import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSessionListComponent } from './event-session-list.component';

describe('EventSessionListComponent', () => {
  let component: EventSessionListComponent;
  let fixture: ComponentFixture<EventSessionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSessionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
