export class Event {
  public cpr: string;
  public eventType: string;
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public time: string;

  constructor(cpr: string, eventType: string, firstName: string, middleName: string, lastName: string, time: string) {
    this.cpr = cpr;
    this.eventType = eventType;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.time = time;
  }
}


