import { Component, OnInit } from '@angular/core';
import { EventService } from '../common/services/event.service';
import { ToastrService } from '../common/services/toastr.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '../common/models/event.model';

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
