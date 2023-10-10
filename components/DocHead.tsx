import Head from "next/head";
import { ReactElement } from "react";
import { SiteMetadata } from "types";

interface DocHeadProps {
  readonly metadata: SiteMetadata;
}

export const DocHead = ({ metadata }: DocHeadProps): ReactElement => (
  <Head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />

    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:image" content={`${metadata.canonical}/og.png`} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Steven Webster" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:image:src" content={`${metadata.canonical}/og.png`} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:url" content={metadata.canonical} />

    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);
