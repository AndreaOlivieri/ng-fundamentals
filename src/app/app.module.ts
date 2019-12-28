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
import { DurationPipe } from './common/pipes/duration.pipe';
import { JQ_TOKEN } from './common/services/jquery.service';
import { SimpleModalComponent } from './common/components/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/directives/modal-trigger.directive';

const jQuery = window['$'];

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
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
