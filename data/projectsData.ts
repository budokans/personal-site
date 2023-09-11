import * as Description from "../components/feature/descriptions";
import { Project } from "types";

export const projects: readonly Project[] = [
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
    description: Description.StoryTyper,
    links: [
      { type: "Visit", url: "https://storytyper.stevenwebster.co" },
      { type: "GitHub", url: "https://github.com/budokans/story-typer" },
    ],
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    shortBlurb:
      "A clone of the late-2020 Netflix front-end experience, utilizing Firebase for auth and data storage.",
    icon: "/images/netflix-logo.jpg",
    tech: [
      "React",
      "styled-components",
      "Firebase",
      "React Testing Library",
      "Vercel",
    ],
    featureMedia: [
      {
        path: "/images/netflix-jumbotron-screenshot.png",
        bg: "#e50914",
        alt: "Netflix Clone Jumbotron Screenshot",
      },
      {
        path: "/images/netflix-feature-screenshot.png",
        bg: "#222",
        alt: "Netflix Clone Feature Screenshot",
      },
      {
        path: "/images/netflix-mobile.png",
        bg: "#0000000a",
        alt: "Netflix Clone Mobile Screenshot",
      },
      {
        path: "/images/netflix-browse-screenshot.png",
        bg: "black",
        alt: "Netflix Clone Browse Screenshot",
      },
      {
        path: "/images/netflix-home-page-screenshot.png",
        bg: "#222",
        alt: "Netflix Clone Home Page Screenshot",
      },
    ],
    description: Description.NetflixClone,
    links: [
      { type: "Visit", url: "https://notreallynetflix.vercel.app/" },
      { type: "GitHub", url: "https://github.com/budokans/netflix-clone" },
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
    description: Description.PortfolioSite,
    links: [
      { type: "GitHub", url: "https://github.com/budokans/personal-site" },
    ],
  },
];
