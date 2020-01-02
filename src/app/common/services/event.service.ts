import {EventEmitter, Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {IEvent} from '../models/event.model';
import {IEventSession} from '../models/event-session.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Array<IEvent>> {
    return this.http
      .get<Array<IEvent>>("/api/events")
      .pipe(catchError(this.handleError<Array<IEvent>>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http
      .get<IEvent>(`/api/events/${id}`)
      .pipe(catchError(this.handleError<IEvent>('getEvent')));
  }

  saveEvent(newEvent: IEvent): Observable<IEvent> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http
      .post<IEvent>('/api/events', newEvent, options)
      .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }

  searchSessions(searchTerm: string): Observable<Array<IEventSession>> {
    const term = searchTerm.toLowerCase();
    return this.http
      .get<Array<IEventSession>>(`/api/sessions/search?search=${term}`)
      .pipe(catchError(this.handleError<Array<IEventSession>>('searchSessions')));
  }

  private handleError<T>(operation="operation", results?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(results as T);
    };
  }
}
