import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IEvent} from '../common/models/event.model';
import {EventService} from '../common/services/event.service';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  newEvent: IEvent;
  isDirty = true;

  constructor(
    private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit() {
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigateByUrl('/events');
    });
  }

  cancel() {
    this.router.navigateByUrl('/events');
  }

}
