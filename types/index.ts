import { ReactElement, ReactNode } from "react";

export interface FeatureMedia {
  readonly path: string;
  readonly bg: string;
  readonly alt: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly shortBlurb: string;
  readonly icon: string;
  readonly tech: readonly string[];
  readonly featureMedia: readonly FeatureMedia[];
  readonly description: () => ReactElement;
  readonly links: readonly {
    readonly type: "Visit" | "GitHub";
    readonly url: string;
  }[];
}

export type ContactMethod =
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
  readonly title: string;
  readonly description: string;
  readonly location: string;
  readonly canonical: string;
  readonly contacts: readonly ContactMethod[];
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
