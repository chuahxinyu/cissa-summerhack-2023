export type TemplateOptions = 'Template 1 Name' | 'Template 2 Name' | 'Template 3 Name' | 'Template 4 Name';

export interface IResumeData {
  template?: TemplateOptions;
  aboutMe: IAboutMeSection;
  sections: (IBulletSection | IDetailedSection)[];
}

/* ABOUT ME SECTION */
export interface ILink {
  label: string;
  url: string;
}
export interface IAboutMeSection {
  name: string;
  lastName?: string;
  email?: string;
  phoneNo?: string;
  address?: string;
  jobTitle?: string;
  profile?: string;
  links?: ILink[];
}

/* DETAILED SECTION AND SUBSECTION */
export interface IDetailedSection {
  sectionType: 'detailed';
  sectionTitle: string;
  subSections: IDetailedSubsection[];
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
  sectionType: 'bullet';
  sectionTitle: string;
  bullets: BulletPoint[];
}

export interface BulletPoint {
  text: string;
  subBullets: BulletPoint;
}
