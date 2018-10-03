export class Event {
  public eventId: string;
  public eventType: string;
  public user: string;
  public time: string;

  constructor(eventId: string, eventType: string, user: string, time: string) {
    this.eventId = eventId;
    this.eventType = eventType;
    this.user = user;
    this.time = time;
  }
}


