export class Offender {
  public offenderID: string;
  public cpr: string;
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public address: string;
  public city: string;
  public zip: string;

  constructor(offenderID: string, cpr: string, firstName: string, middleName: string, lastName: string,
              address: string, city: string, zip: string) {
    this.offenderID = offenderID;
    this.cpr = cpr;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.zip = zip;
  }
}
