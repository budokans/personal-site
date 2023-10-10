import { Feature } from "components";
import { Project } from "types";

export const projectsData: readonly Project[] = [
  {
    id: "pivot-pointe",
    title: "Pivot Pointe",
    shortBlurb:
      "Migrated and rebuilt a website and built a bug-free web app for a client in 3 weeks.",
    icon: "/images/pivot-pointe-logo.png",
    tech: [
      "TypeScript",
      "JQuery",
      "Firebase Firestore",
      "ESBuild",
      "Webflow",
      "Memberstack",
      "MarkUp.io",
    ],
    featureMedia: [
      {
        path: "/images/pivot-pointe-home.png",
        bg: "#03333A",
        alt: "pivot-pointe.com homepage screenshot",
      },
      {
        path: "/images/pivot-pointe-insights.jpg",
        bg: "#CBDFD7",
        alt: "pivot-pointe.com blog screenshot",
      },
      {
        path: "/images/pivot-pointe-purchase.png",
        bg: "#00928F",
        alt: "pivot-pointe.com purchase page screenshot",
      },
      {
        path: "/images/pivot-pointe-app-desktop.jpg",
        bg: "#F2F0F0",
        alt: "pivot-pointe.com app desktop layout screenshot",
      },
      {
        path: "/images/pivot-pointe-app-mobile.jpg",
        bg: "#A89061",
        alt: "pivot-pointe.com app mobile layout screenshot",
      },
    ],
    description: Feature.Descriptions.PivotPointe,
    links: [{ type: "Visit", url: "https://www.pivot-pointe.com" }],
  },
  {
    id: "story-typer",
    title: "Story Typer",
    shortBlurb:
      "A JamStack speed-typing game for lovers of short - very short - stories.",
    icon: "/images/story-typer-logo.png",
    tech: [
      "fp-ts",
      "React",
      "Next.js",
      "TypeScript",
      "Functional Programming",
      "Firebase",
      "TanStack Query",
      "Chakra UI",
      "Jest",
      "Vercel",
      "Test-Driven Development",
    ],
    featureMedia: [
      {
        path: "/images/story-typer-home-screenshot.png",
        bg: "#000c",
        alt: "Story Typer Home Page Screenshot",
      },
      {
        path: "/images/story-typer-gameplay-screenshot.png",
        bg: "#edf2f7",
        alt: "Story Typer Gameplay Screenshot",
      },
      {
        path: "/images/story-typer-archive-page-screenshot.png",
        bg: "#000c",
        alt: "Story Typer Archive Page Screenshot",
      },
      {
        path: "/images/story-typer-mobile-layouts-screenshot.png",
        bg: "#0AF5F4",
        alt: "Story Typer Mobile Layouts Screenshot",
      },
      {
        path: "/images/story-typer-lighthouse-scores-screenshot.png",
        bg: "white",
        alt: "Story Typer Lighthouse Scores Screenshot",
      },
    ],
    description: Feature.Descriptions.StoryTyper,
    links: [
      { type: "Visit", url: "https://storytyper.stevenwebster.co" },
      { type: "GitHub", url: "https://github.com/budokans/story-typer" },
    ],
  },
  {
    id: "personal-site",
    title: "stevenwebster.co",
    shortBlurb:
      "You're here right now! My personal site with a perfect Google Lighthouse score.",
    icon: "/images/stevenwebster.co-logo.png",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Chakra UI",
      "Framer Motion",
      "React Testing Library",
      "GitHub Actions",
      "Vercel",
    ],
    featureMedia: [
      {
        path: "/images/stevenwebster.co-performance.png",
        bg: "#e2e8f0",
        alt: "Stevenwebster.co Lighthouse Performance Screenshot",
      },
    ],
    description: Feature.Descriptions.PortfolioSite,
    links: [
      { type: "GitHub", url: "https://github.com/budokans/personal-site" },
    ],
  },
];
