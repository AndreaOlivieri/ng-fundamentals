import { Injectable } from '@angular/core';
import {IEventSession} from '../../../common/models/event-session.model';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  userHasVoted(session: IEventSession, userName: string) {
    return session.voters.some(voter => voter === userName);
  }

  addVoter(session: IEventSession, userName: string) {
    session.voters.push(userName);
  }

  deleteVoter(session: IEventSession, userName: string) {
    session.voters = session.voters.filter(voter => voter !== userName);
  }
}
