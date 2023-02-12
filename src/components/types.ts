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
  isExpanded: boolean;
}

/* DETAILED SECTION AND SUBSECTION */
export interface IDetailedSection {
  sectionType: 'detailed';
  sectionTitle: string;
  subSections: IDetailedSubsection[];
  isExpanded: boolean;
}

export interface IDetailedSubsection {
  title: string;
  subtitle?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  bullets: IBulletPoint[];
  isExpanded: boolean;
}

/* BULLET SECTION AND POINT */
export interface IBulletSection {
  sectionType: 'bullet';
  sectionTitle: string;
  bullets: IBulletPoint[];
  isExpanded: boolean;
}

export interface IBulletPoint {
  text: string;
  subBullets: IBulletPoint[];
}
