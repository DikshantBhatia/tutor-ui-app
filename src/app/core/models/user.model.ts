/**
 *  This user model stores the user details within the application.
 *  The instance is created by using Partial Operator of Typescript so as to avoid errors if any of the fields is missing.
 *  new User({phoneNumber: '1234'}) would return user object with just phoneNumber present in it.
 *  The default value can be given to fields if required in future
 *
 */
export class User {


  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  phoneNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  zipCode: string;
  gender: string;
  languagePreference: string;
  locationPreference: string;
  roles: [];
}
