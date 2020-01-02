import {Routes} from '@angular/router';
import {EventsListComponent} from './events-list/events-list.component';
import {EventDetailsComponent} from './event-details/event-details.component';
import {CreateEventComponent} from './create-event/create-event.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EventDetailsRouteGuardService} from './event-details/event-details-route-guard.service';
import {CreateEventRouteGuardService} from './create-event/create-event-route-guard.service';
import {EventsListRouteGuardService} from './events-list/events-list-route-guard.service';
import {CreateEventSessionComponent} from './event-session/create-event-session.component';


export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListRouteGuardService} },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: [CreateEventRouteGuardService] },
  { path: 'events/session/new', component: CreateEventSessionComponent },
  { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventDetailsRouteGuardService} },
  { path: '404', component: PageNotFoundComponent },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
