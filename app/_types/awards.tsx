export interface AwardClassroom {}

export interface AwardUserProfile {
  _id: string;
  email: string;
  selfSelectedType: "reader" | "educator" | "librarian";
  selfEnteredPIN: string;
  classes: AwardClassroom[];
  firstName: string;
  lastName: string;
  displayName: string;
  gender: string;
  ethnicity: string;
  pronouns: string;
  isReader: boolean;
  isEducator: boolean;
  isLibrarian: boolean;
  isAwardCommittee: boolean;
  created: Date;
  updated: Date;
}
