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

export enum Degree {
  SECONDARY = 'Secondary(10th)',
  HIGHER_SECONDARY = 'Higher Secondary(12th)',
  BACHELORS = 'Bachelors',
  MASTERS = 'Masters',
  OTHER = 'Other',
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

export interface ContactInfo {
  email: string;
  phoneNumber: string;
  emailVerified: boolean;
  phoneNumberVerified: boolean;
}

export interface Tag {
  id : any;
  description: any;
  selected? : boolean;
}

export const DEGREES = Object.keys(Degree).map(key => {
  return {
    id: key,
    description : Degree[key]
  }
})

export const TEACHING_LOCATION_TAGS = Object.keys(TeachingLocation).map(key => {
  return {
    id: key,
    description: TeachingLocation[key]
  };
});

export const LANGUAGE_TAGS = Object.keys(Language).map(key => {
  return {
    id: key,
    description: Language[key]
  };
});

export const AUDIENCE_TAGS = Object.keys(Audience).map(key => {
  return {
    id: key,
    description: Audience[key]
  };
});
