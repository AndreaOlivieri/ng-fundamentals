import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {EventService} from '../common/services/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsRouteGuardService implements CanActivate{

  constructor(
    private eventService: EventService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const eventId = +route.params['id'];
    const eventExists = !!this.eventService.getEvent(eventId);
    if (!eventExists) {
       this.router.navigateByUrl('/404');
    }
    return eventExists;
  }
}
