import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IEventSession} from '../common/models/event-session.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {restrictedWords} from '../common/validators/restricted-words';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-event-session.component.html',
  styleUrls: ['./create-event-session.component.css']
})
export class CreateEventSessionComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  newEventSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  voters: FormControl;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
        Validators.required,
        Validators.maxLength(400),
        restrictedWords(['foo', 'bar'])
      ]
    );
    this.voters = new FormControl('', Validators.required);

    this.newEventSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
      voters: this.voters,
    });
  }

  saveEventSession(formValues) {
    const newEventSession: IEventSession = {
      id: 1,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: [],
    };
    this.saveNewSession.emit(newEventSession);
    console.log(newEventSession);
  }

  cancel() {
    this.cancelAddSession.emit();
  }

}
