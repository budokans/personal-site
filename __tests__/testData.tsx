import { ReactElement } from "react";
import { Project, SiteMetadata } from "types";

export const testProjects: readonly Project[] = [
  {
    title: "Story Typer",
    shortBlurb:
      "A race-the-clock, retro-themed speed-typing game for desktop browsers with context scraped daily from fiftywordstories.com",
    icon: "/images/story-typer-logo.jpg",
    tech: ["React", "Next.js", "BEM", "Node.js", "Express", "Cheerio JS"],
    featureMedia: [
      {
        path: "/images/story-typer-error-screenshot.png",
        bg: "#0f0",
        alt: "Story Typer Gameplay Screenshot",
      },
      {
        path: "/images/story-typer-light-theme-screenshot.png",
        bg: "#e9bc90",
        alt: "Story Typer Light Theme Screenshot",
      },
      {
        path: "/images/story-typer-win-screenshot.png",
        bg: "#ffd700",
        alt: "Story Typer Game Over Screenshot",
      },
      {
        path: "/images/story-typer-difficulties-screenshot.png",
        bg: "#00db00",
        alt: "Story Typer Difficulties Screenshot",
      },
      {
        path: "/images/story-typer-performance-screenshot.png",
        bg: "white",
        alt: "Story Typer Lighthouse Performance Screenshot",
      },
    ],
    description: function testDescription(): ReactElement {
      return <>Test StoryTyper description</>;
    },
    links: [
      { type: "Visit", url: "https://storytyper.stevenwebster.co" },
      { type: "GitHub", url: "https://github.com/budokans/storytyper" },
    ],
  },
  {
    title: "stevenwebster.co",
    shortBlurb:
      "You're here right now! My personal site with a perfect Google Lighthouse score!",
    icon: "/images/stevenwebster.co-logo.png",
    tech: ["React", "Next.js", "TypeScript", "Chakra UI", "Framer Motion"],
    featureMedia: [
      {
        path: "/images/stevenwebster.co-performance.png",
        bg: "#e2e8f0",
        alt: "Stevenwebster.co Lighthouse Performance Screenshot",
      },
    ],
    description: function testDescription(): ReactElement {
      return <>Test Personal Site description</>;
    },
    links: [
      { type: "GitHub", url: "https://github.com/budokans/personal-site" },
    ],
  },
];

export const testSiteMetadata: SiteMetadata = {
  headline:
    "Hi, I'm Steve and I'm a full-stack developer who cares about scalability, performance, and intuitive UIs.",
  cta:
    "Please use the links below to chat with me about how I can help build your project.",
  location: "📍 Auckland | Kuala Lumpur",
  canonical: "https://stevenwebster.co",
  contacts: [
    {
      type: "email",
      address: "contact@stevenwebster.co",
      url: "mailto:contact@stevenwebster.co",
    },
    {
      type: "website",
      name: "GitHub",
      url: "https://github.com/budokans",
    },
    {
      type: "website",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/steven-webster-developer/",
    },
  ],
};
