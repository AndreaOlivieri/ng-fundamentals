import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../user/shared/auth.service';
import {IEventSession} from '../../models/event-session.model';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  searchTerm: string;
  foundSessions: Array<IEventSession>;

  constructor(
    private authService: AuthService,
    private eventService: EventService
  ) {
    this.searchTerm = '';
  }

  ngOnInit() {
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }

}
