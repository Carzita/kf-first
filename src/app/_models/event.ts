export class Event {
  public eventType: string;
  public user: string;
  public time: string;

  constructor(eventType: string, user: string, time: string) {
    this.eventType = eventType;
    this.user = user;
    this.time = time;
  }
}


