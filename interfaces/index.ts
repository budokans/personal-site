export interface FeatureMediaInterface {
  path: string;
  bg: string;
  alt: string;
}

export interface FeatureMediaInterfaces extends Array<FeatureMediaInterface>{}

export interface ProjectInterface {
  title: string;
  shortBlurb: string;
  icon: string;
  tech: string[];
  featureMedia: FeatureMediaInterfaces;
  description: string[];
  url?: string;
}

export type ProjectDataProps = {
  data: ProjectInterface[]
}

export type ContextType = {
  projectToFeature: number,
  showFeature: boolean,
  openFeature(id: number): void,
  closeFeature(): void,
  node: React.RefObject<HTMLDivElement>
}