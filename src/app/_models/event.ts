export class Event {
  public cpr: string;
  public eventType: string;
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public offenderID: string;
  public time: string;

  constructor(cpr: string, eventType: string, firstName: string, middleName: string, lastName: string, offenderID: string, time: string) {
    this.cpr = cpr;
    this.eventType = eventType;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.offenderID = offenderID;
    this.time = time;
  }
}


