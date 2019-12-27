export interface IEventSession {
  id: number,
  name: string
  presenter: string,
  duration: number,
  level: string,
  abstract: string,
  voters: Array<string>
}
