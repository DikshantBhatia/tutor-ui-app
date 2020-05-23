export class User {

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  phoneNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  gender: string;
  languagePreference: string;
  locationPreference: string;
  roles: [];
}
