import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {IEventSession} from '../../common/models/event-session.model';

@Component({
  selector: 'app-event-session-list',
  templateUrl: './event-session-list.component.html',
  styleUrls: ['./event-session-list.component.css']
})
export class EventSessionListComponent implements OnInit, OnChanges {

  @Input() sessions: Array<IEventSession>;
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: Array<IEventSession>;

  constructor() {
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
    if (sort === 'name') {
      this.visibleSessions.sort((s1, s2) => {
        if (s1.name > s2.name) {
          return 1;
        } else if (s1.name === s2.name) {
          return 0;
        } else {
          return -1;
        }
      });
    } else {
      this.visibleSessions.sort((s1, s2) => {
        return s2.voters.length - s1.voters.length;
      });
    }
  }

}
