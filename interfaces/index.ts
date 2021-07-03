export interface FeatureMediaInterface {
  path: string;
  bg: string;
  alt: string;
}

export interface LinkInterface {
  type: "Visit" | "GitHub";
  url: string;
}

export interface ProjectInterface {
  title: string;
  shortBlurb: string;
  icon: string;
  tech: string[];
  featureMedia: FeatureMediaInterface[];
  description: string[];
  links: LinkInterface[];
}

export interface ContactInterface {
  type: string;
  value: string;
}

export interface MetadataInterface {
  description: string;
  canonical: string;
  contacts: ContactInterface[];
}

export interface ApplicationProps {
  projects: ProjectInterface[];
  metadata: MetadataInterface;
  onPortfolioClick: (id: number) => void;
}

export interface ImageProps {
  src: string;
  alt: string;
}
