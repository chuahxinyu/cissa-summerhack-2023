import {
  IAboutMeSection,
  IBulletPoint,
  IBulletSection,
  IDetailedSubsection,
  IDetailedSection,
  IResumeData,
} from './types';

export const INITIAL_ABOUT_ME: IAboutMeSection = {
  name: '',
  lastName: '',
  email: '',
  phoneNo: '',
  address: '',
  jobTitle: '',
};
export const INITIAL_BULLET: IBulletPoint = { text: '', subBullets: [] };

export const INITIAL_BULLET_SECTION: IBulletSection = {
  sectionType: 'bullet',
  sectionTitle: 'Bullet Section Title',
  bullets: [INITIAL_BULLET],
};

export const INITIAL_DETAILED_SUBSECTION: IDetailedSubsection = {
  title: 'Detailed Subsection',
  subtitle: '',
  date: '',
  location: '',
  bullets: [INITIAL_BULLET],
};
export const INITIAL_DETAILED_SECTION: IDetailedSection = {
  sectionType: 'detailed',
  sectionTitle: 'Detailed Section Title',
  subSections: [INITIAL_DETAILED_SUBSECTION],
};

export const INITIAL_FORM_STATE: IResumeData = {
  aboutMe: INITIAL_ABOUT_ME,
  sections: [INITIAL_BULLET_SECTION, INITIAL_DETAILED_SECTION],
};
