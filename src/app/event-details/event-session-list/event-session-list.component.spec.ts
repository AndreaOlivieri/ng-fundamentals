import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSessionListComponent } from './event-session-list.component';
import {VoterService} from './upvote/voter.service';
import {AuthService} from '../../user/shared/auth.service';
import {IEventSession} from '../../common/models/event-session.model';
import {CollapsibleWellComponent} from '../../common/components/collapsible-well/collapsible-well.component';
import {UpvoteComponent} from './upvote/upvote.component';
import {DurationPipe} from '../../common/pipes/duration.pipe';

describe('EventSessionListComponent', () => {
  let component: EventSessionListComponent;
  let fixture: ComponentFixture<EventSessionListComponent>;
  let mockVoterService;
  let mockAuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventSessionListComponent,
        CollapsibleWellComponent,
        UpvoteComponent,
        DurationPipe
      ],
      providers: [
        { provide: VoterService, useValue: mockVoterService},
        { provide: AuthService, useValue: mockAuthService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      component.sessions = <Array<IEventSession>> [
        {
          id: 1,
          abstract: "",
          duration: 2,
          level: 'intermediate',
          name: 'session 1',
          presenter: "",
          voters: ['joe', 'john']
        },
        {
          id: 2,
          abstract: "",
          duration: 3,
          level: 'intermediate',
          name: 'session 2',
          presenter: "",
          voters: ['joe', 'john']
        },
        {
          id: 3,
          abstract: "",
          duration: 4,
          level: 'beginner',
          name: 'session 3',
          presenter: "",
          voters: ['joe', 'john']
        },
      ];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();
      expect(component.visibleSessions.length).toBe(2);
    });

    it('should sort the sessions correctly', () => {
      component.sessions = <Array<IEventSession>> [
        {
          id: 1,
          abstract: "",
          duration: 2,
          level: 'intermediate',
          name: 'session 1',
          presenter: "",
          voters: ['joe', 'john']
        },
        {
          id: 3,
          abstract: "",
          duration: 4,
          level: 'beginner',
          name: 'session 3',
          presenter: "",
          voters: ['joe', 'john']
        },
        {
          id: 2,
          abstract: "",
          duration: 3,
          level: 'intermediate',
          name: 'session 2',
          presenter: "",
          voters: ['joe', 'john']
        },
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();
      expect(component.visibleSessions[2].name).toBe('session 3');
    });
  });
});
