export interface ProjectInterface {
  title: string;
  shortBlurb: string;
  icon: string;
  tech: string[];
  featureMedia: string[];
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