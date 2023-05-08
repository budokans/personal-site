import * as IoTs from "io-ts";
import { ReactNode } from "react";

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

export const ContactWebsite = IoTs.union([
  IoTs.literal("GitHub"),
  IoTs.literal("LinkedIn"),
]);
export type ContactWebsite = IoTs.TypeOf<typeof ContactWebsite>;

export const EmailContact = IoTs.type({
  type: IoTs.literal("email"),
  address: IoTs.string,
  url: IoTs.string,
});
export type EmailContact = IoTs.TypeOf<typeof EmailContact>;

export const WebContact = IoTs.type({
  type: IoTs.literal("website"),
  name: ContactWebsite,
  url: IoTs.string,
});
export type WebContact = IoTs.TypeOf<typeof WebContact>;

export const Contact = IoTs.union([EmailContact, WebContact]);
export type Contact = IoTs.TypeOf<typeof Contact>;

export const SiteMetadata = IoTs.type({
  headline: IoTs.string,
  cta: IoTs.string,
  location: IoTs.string,
  canonical: IoTs.string,
  contacts: IoTs.readonlyArray(Contact),
});
export type SiteMetadata = IoTs.TypeOf<typeof SiteMetadata>;

// UI
export interface ImageProps {
  readonly src: string;
  readonly alt: string;
}

export interface CarouselProps {
  readonly media: readonly FeatureMedia[];
}

export type ChildrenProps = {
  readonly children?: ReactNode;
};
