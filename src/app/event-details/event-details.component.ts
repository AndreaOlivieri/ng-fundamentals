import { Component, OnInit } from '@angular/core';
import {EventService} from '../common/services/event.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '../common/models/event.model';
import {IEventSession} from '../common/models/event-session.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  addMode: boolean;
  filterBy: string;
  sortBy: string;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {
    this.filterBy = 'all';
    this.sortBy = 'name';
  }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(newEventSession: IEventSession) {
    newEventSession.id = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1;
    this.event.sessions.push(newEventSession);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
