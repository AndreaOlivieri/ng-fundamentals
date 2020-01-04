import { TestBed } from '@angular/core/testing';

import { VoterService } from './voter.service';
import { HttpClient } from '@angular/common/http';
import {IEventSession} from '../../../common/models/event-session.model';
import { of } from 'rxjs';

describe('VoterService', () => {
  let voterService: VoterService;
  const mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
  // change return value of delete http request to be a observable that return false
  mockHttp.delete.and.returnValue(of(false));
  mockHttp.post.and.returnValue(of(false));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VoterService,
        { provide: HttpClient, useValue: mockHttp}
      ]
    });
    voterService = TestBed.get(VoterService);
  });

  it('should remove the voter from the list of voters', () => {
    const session: IEventSession = {
      id: 6,
      abstract: "",
      duration: 0,
      level: "",
      name: "",
      presenter: "",
      voters: ['joe', 'john']
    };
    voterService.deleteVoter(3, session, 'joe');

    expect(session.voters.length).toBe(1);
    expect(session.voters[0]).toBe('john');
  });

  it('should call http.delete with the right URL', () => {
    const session: IEventSession = {
      id: 6,
      abstract: "",
      duration: 0,
      level: "",
      name: "",
      presenter: "",
      voters: ['joe', 'john']
    };
    voterService.deleteVoter(3, session, 'joe');

    expect(mockHttp.delete).toHaveBeenCalledWith(`/api/events/3/sessions/6/voters/joe`);
  });

  it('should call http.post with the right URL', () => {
    const session: IEventSession = {
      id: 6,
      abstract: "",
      duration: 0,
      level: "",
      name: "",
      presenter: "",
      voters: ['joe', 'john']
    };
    voterService.addVoter(3, session, 'joe');

    expect(mockHttp.post).toHaveBeenCalledWith(`/api/events/3/sessions/6/voters/joe`, {}, jasmine.any(Object));
  });
});
