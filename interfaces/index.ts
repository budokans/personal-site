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