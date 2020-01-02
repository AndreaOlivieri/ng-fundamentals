import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {IEventSession} from '../../common/models/event-session.model';
import {AuthService} from '../../user/shared/auth.service';
import {VoterService} from './upvote/voter.service';

@Component({
  selector: 'app-event-session-list',
  templateUrl: './event-session-list.component.html',
  styleUrls: ['./event-session-list.component.css']
})
export class EventSessionListComponent implements OnInit, OnChanges {

  @Input() eventId: number;
  @Input() sessions: Array<IEventSession>;
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: Array<IEventSession>;

  constructor(
    private voterService: VoterService,
    private authService: AuthService
  ) {
    this.visibleSessions = [];
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => session.level.toLowerCase() === filter);
    }
  }

  sortSessions(sort: string) {
    let sortMethod;
    switch (sort) {
      case 'name': {
          sortMethod = sortSessionsByNameAsc;
          break;
       }
       case 'votes': {
          sortMethod = sortSessionsByVotesDesc;
          break;
       }
       default: {
          break;
       }
    }
    if (sortMethod) {
      this.visibleSessions.sort(sortMethod);
    }
  }

  toggleVote(session: IEventSession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
    }

    if (this.sortBy === 'votes') {
      this.sortSessions(this.sortBy);
    }
  }

  userHasVoted(session: IEventSession): boolean {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
  }
}

function sortSessionsByNameAsc(s1, s2) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortSessionsByVotesDesc(s1, s2) {
  return s2.voters.length - s1.voters.length;
}
