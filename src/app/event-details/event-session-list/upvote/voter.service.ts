import { Injectable } from '@angular/core';
import {IEventSession} from '../../../common/models/event-session.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  userHasVoted(session: IEventSession, userName: string) {
    return session.voters.some(voter => voter === userName);
  }

  addVoter(eventId: number, session: IEventSession, userName: string) {
    session.voters.push(userName);

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    this.http
      .post(url, {}, options)
      .pipe(catchError(this.handleError<IEventSession>('saveEvent')))
      .subscribe();
  }

  deleteVoter(eventId: number, session: IEventSession, userName: string) {
    session.voters = session.voters.filter(voter => voter !== userName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    this.http
      .delete(url)
      .pipe(catchError(this.handleError<IEventSession>('saveEvent')))
      .subscribe();
  }

  private handleError<T>(operation="operation", results?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(results as T);
    };
  }
}
