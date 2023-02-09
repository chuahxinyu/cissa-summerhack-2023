export type TemplateOptions = 'Template 1 Name' | 'Template 2 Name' | 'Template 3 Name';

export interface IResumeData {
  template: TemplateOptions;
  aboutMe: IAboutMeSection;
  sections: (IDetailedSubsection | IDetailedSection)[]
}

/* ABOUT ME SECTION */
export interface IAboutMeSection {
  name: string;
  email?: string; // TODO FORMIK email validation
  phoneNo?: string; // TODO FORMIK phone number validation
  address?: string;
  jobTitle?: string;
  links: string[]; // like LinkedIn, Website etc. -- TODO Markdown link parsing?
}

/* DETAILED SECTION AND SUBSECTION */
export interface IDetailedSection {
  sectionTitle: string;
  subSections: IDetailedSubsection[]
}

export interface IDetailedSubsection {
  title: string;
  subtitle?: string;
  date?: string;
  location?: string;
  bullets: BulletPoint[]; 
}

/* BULLET SECTION AND POINT */
export interface IBulletSection {
  sectionTitle: string;
  bullets: BulletPoint[]; // TODO ^ similar to ISubSection Bullets
}

export interface BulletPoint {
  text: string;
  subBullets: BulletPoint;
}