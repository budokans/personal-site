import * as IoTs from "io-ts";

export const FeatureMedia = IoTs.type({
  path: IoTs.string,
  bg: IoTs.string,
  alt: IoTs.string,
});
export type FeatureMedia = IoTs.TypeOf<typeof FeatureMedia>;

export const ProjectLink = IoTs.type({
  type: IoTs.union([IoTs.literal("Visit"), IoTs.literal("GitHub")]),
  url: IoTs.string,
});
export type ProjectLink = IoTs.TypeOf<typeof ProjectLink>;

export const Project = IoTs.type({
  title: IoTs.string,
  shortBlurb: IoTs.string,
  icon: IoTs.string,
  tech: IoTs.readonlyArray(IoTs.string),
  featureMedia: IoTs.readonlyArray(FeatureMedia),
  description: IoTs.readonlyArray(IoTs.string),
  links: IoTs.readonlyArray(ProjectLink),
});
export type Project = IoTs.TypeOf<typeof Project>;

export const Projects = IoTs.readonlyArray(Project);
export type Projects = IoTs.TypeOf<typeof Projects>;

export const Contact = IoTs.type({
  type: IoTs.string,
  value: IoTs.string,
});
export type Contact = IoTs.TypeOf<typeof Contact>;

export const SiteMetadata = IoTs.type({
  description: IoTs.string,
  canonical: IoTs.string,
  contacts: IoTs.readonlyArray(Contact),
});
export type SiteMetadata = IoTs.TypeOf<typeof SiteMetadata>;

export interface ImageProps {
  readonly src: string;
  readonly alt: string;
}
