import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {EventService} from '../common/services/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsRouteGuardService implements Resolve<any> {

  constructor(
    private eventService: EventService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }
}
