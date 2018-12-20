export class Offender {
  public offenderID: string;
  public cpr: string;
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public address: string;
  public city: string;
  public zip: string;
  public startDate: string;
  public endDate: string;
  public comments: object;

  constructor(offenderID: string, cpr: string, firstName: string, middleName: string, lastName: string,
              address: string, city: string, zip: string, startDate: string, endDate: string, comments: object) {
    this.offenderID = offenderID;
    this.cpr = cpr;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.zip = zip;
    this.startDate = startDate;
    this.endDate = endDate;
    this.comments = comments;
  }
}
