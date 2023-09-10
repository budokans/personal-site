import { ReactNode } from "react";

export interface FeatureMedia {
  readonly path: string;
  readonly bg: string;
  readonly alt: string;
}

export interface Project {
  readonly title: string;
  readonly shortBlurb: string;
  readonly icon: string;
  readonly tech: readonly string[];
  readonly featureMedia: readonly FeatureMedia[];
  readonly description: readonly string[];
  readonly links: readonly {
    readonly type: "Visit" | "GitHub";
    readonly url: string;
  }[];
}

export type Contact =
  | {
      readonly type: "email";
      readonly address: string;
      readonly url: string;
    }
  | {
      readonly type: "website";
      readonly name: "GitHub" | "LinkedIn";
      readonly url: string;
    };

export interface SiteMetadata {
  readonly headline: string;
  readonly cta: string;
  readonly location: string;
  readonly canonical: string;
  readonly contacts: readonly Contact[];
}

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
