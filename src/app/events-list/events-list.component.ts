import { Component, OnInit } from '@angular/core';
import { EventService } from '../common/event.service';
import { ToastrService } from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '../common/event.model';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Array<IEvent>;

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked(data) {
    alert(data);
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }
}
