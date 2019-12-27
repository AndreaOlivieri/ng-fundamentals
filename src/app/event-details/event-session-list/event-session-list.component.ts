import {Component, Input, OnInit} from '@angular/core';
import {IEventSession} from '../../common/models/event-session.model';

@Component({
  selector: 'app-event-session-list',
  templateUrl: './event-session-list.component.html',
  styleUrls: ['./event-session-list.component.css']
})
export class EventSessionListComponent implements OnInit {

  @Input() sessions: Array<IEventSession>;
  constructor() { }

  ngOnInit() {
  }

}
