export enum UserType {
  TUTOR = 'TUTOR',
  STUDENT = 'STUDENT',
}

export enum GoogleAddressType {
  CITY = '(cities)',
  GEOCODE = 'geocode',
  COMPLETE_ADDRESS = 'address',
}

export enum TutorStatus {
  ACTIVE = 'Active',
  DEACTIVATED = 'Deactivated',
}

export enum Audience {
  ONE_TO_FIVE = 'Class 1 to 5',
  SIX_TO_EIGHT = 'Class 6 to 8',
  NINE_TO_TEN = 'Class 9 to 10',
  ELEVEN_TO_TWELVE = 'Class 11 to 12',
  OTHER = 'Other',
}

export enum TeachingLocation {
  MY_HOME = 'My Home',
  STUDENT_HOME = 'Student Home',
  ONLINE = 'Online',
}

export enum Language {
  EN = 'English',
  HI = 'Hindi',
}

export interface Address {
  googlePlaceId: string;
  description: string;
  type: GoogleAddressType;
}

export interface Education {
  instituteName: string;
  degree: string;
}

export interface WorkExperience {
  experienceInYears: number;
  experienceDescription: string;
}

export interface Subject {
  id: number;
  description: string;
}

export interface TutorAudience {
  audience: Audience;
  selected: boolean;
}

export interface TutorTeachingLocation {
  teachingLocation: TeachingLocation;
  selected: boolean;
}

export interface TutorTeachingLanguage {
  teachingLanguage: Language;
  selected: boolean;
}

export interface ContactInfo {
  email: string;
  phoneNumber: string;
  emailVerified: boolean;
  phoneNumberVerified: boolean;
}
