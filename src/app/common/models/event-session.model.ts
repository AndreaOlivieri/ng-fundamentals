export interface IEventSession {
  eventId?: number;
  id: number,
  name: string
  presenter: string,
  duration: number,
  level: string,
  abstract: string,
  voters: Array<string>
}
