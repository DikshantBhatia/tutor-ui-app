/**
 *  This user model stores the user details within the application.
 *  The instance is created by using Partial Operator of Typescript so as to avoid errors if any of the fields is missing.
 *  new User({phoneNumber: '1234'}) would return user object with just phoneNumber present in it.
 *  The default value can be given to fields if required in future
 *
 */
import {
  Address, Audience, ContactInfo, Education, Language,
  Subject, TeachingLocation, TutorAudience,
  TutorStatus,
  TutorTeachingLanguage, TutorTeachingLocation,
  UserType,
  WorkExperience,
} from '../../shared/models/types';

export class User {
  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  type: UserType;
  firstName: string;
  lastName: string;
  address : Address;
  contactInfo: ContactInfo;
  aboutMe: string;
  tagLine: string;
  education: Education;
  workExperience: WorkExperience;
  subjects: Subject[];
  tutorStatus: TutorStatus;
  profileVerified: boolean;
  profileCreated: boolean;
  tutorTeachingLanguages: TutorTeachingLanguage[];
  tutorTeachingLocations: TutorTeachingLocation[];
  tutorAudiences: TutorAudience[];
  feePerHour: number;

  // profilePicture

}
