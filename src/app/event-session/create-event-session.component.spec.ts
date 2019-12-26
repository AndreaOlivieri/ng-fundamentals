import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventSessionComponent } from './create-event-session.component';

describe('CreateSessionComponent', () => {
  let component: CreateEventSessionComponent;
  let fixture: ComponentFixture<CreateEventSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
