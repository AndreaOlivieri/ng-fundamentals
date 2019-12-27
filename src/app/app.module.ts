import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './events-list/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './common/components/nav/nav.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import {appRoutes} from './routes';
import {RouterModule} from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateEventSessionComponent } from './event-session/create-event-session.component';
import { EventSessionListComponent } from './event-details/event-session-list/event-session-list.component';
import { CollapsibleWellComponent } from './common/components/collapsible-well/collapsible-well.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent,
    CreateEventSessionComponent,
    EventSessionListComponent,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
