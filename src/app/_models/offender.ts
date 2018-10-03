export class Offender {
  public offenderId: string;
  public cpr: string;
  public firstName: string;
  public lastName: string;
  public address: string;
  public city: string;
  public zip: string;

  constructor(offenderId: string, cpr: string, firstName: string, lastName: string, address: string, city: string, zip: string) {
    this.offenderId = offenderId;
    this.cpr = cpr;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.zip = zip;
  }
}
