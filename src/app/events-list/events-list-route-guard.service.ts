import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {EventService} from '../common/services/event.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsListRouteGuardService implements Resolve<any> {

  constructor(
    private eventService: EventService
  ) { }

  resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
