export type TemplateOptions = 'Template 1 Name' | 'Template 2 Name' | 'Template 3 Name';

export interface IResumeData {
  template: TemplateOptions;
  aboutMe: IAboutMeSection;
  sections: (IDetailedSubsection | IDetailedSection)[]
}

/* ABOUT ME SECTION */
export interface IAboutMeSection {
  name: string;
  lastName?: string;
  email?: string;
  phoneNo?: string;
  address?: string;
  jobTitle?: string;
  profile?: string;
  links?: string[];
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