export interface FeatureMediaInterface {
  path: string;
  bg: string;
  alt: string;
}

export interface ProjectInterface {
  title: string;
  shortBlurb: string;
  icon: string;
  tech: string[];
  featureMedia: FeatureMediaInterface[];
  description: string[];
  url?: string;
}

export interface PersonalDataInterface {
  description: string;
  email: string;
  github: string;
  linkedIn: string;
}

export interface ApplicationProps {
  data: ProjectInterface[];
  steven: PersonalDataInterface;
}

export interface ContextType {
  projectToFeature: number;
  showFeature: boolean;
  openFeature(id: number): void;
  closeFeature(): void;
  node: React.RefObject<HTMLDivElement>;
}
