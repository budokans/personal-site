export interface ProjectInterface {
  title: string;
  shortBlurb: string;
  icon: string;
  tech: string[]
  featureMedia: string[]
  description: string[]
}

export type ProjectDataProps = {
  data: ProjectInterface[];
}

export type ContextProps = {
  projectToFeature: number,
  showFeature: boolean,
  openFeature(id: number): void,
  closeFeature(): void,
}