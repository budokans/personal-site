import { Project } from "types";

export const projects: readonly Project[] = [
  {
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
    description: [
      "Finding myself spending a lot of time on speed-typing apps like <a href='https://play.typeracer.com' rel='noreferrer noopener' target='_blank' style='font-weight: 500'>TypeRacer</a>, I decided to craft one of my own.",
      "Fifty-word stories are fetched from <a href='http://fiftywordstories.com' rel='noreferrer noopener' target='_blank' style='font-weight: 500'>fiftywordstories.com</a> via the WordPress API, and this is done daily using a Vercel CRON job that hits an 'update' serverless function.",
      "Next.js was used for ease of development, fast build time, and flexible rendering options. Because the total stories count changes daily, the homepage is incrementally statically generated such that it forces a daily rebuild so that a reasonably up-to-date total number of stories can be displayed.",
      "SEO is less important for the rest of the pages as they lie behind an auth wall. These are therefore entirely pre-rendered without data and render a loading state until auth, user and other data are fetched client-side.",
      "react-query handles querying, caching, and revalidation for most data-fetching operations. useInfiniteQuery and the Intersection Observer API were used to implement infinite scrolling on the archive and favorites pages.",
      "Because there was no need to expose the game's API to any external services, almost all data-fetching is accomplished by querying the Firestore database directly.",
      "Component composition is heavily used throughout, with compound - or 'composite' - components composed in containers.",
      "Almost all application state is stored and manipulated in custom hooks, with global state (auth) and authenticated-only state (user, stories) passed down via context.",
      "Partly tested with Jest, the rest of the project will be functionally tested with a combination of Jest and React Testing Library.",
    ],
    links: [
      { type: "Visit", url: "https://storytyper.stevenwebster.co" },
      { type: "GitHub", url: "https://github.com/budokans/story-typer" },
    ],
  },
  {
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
    description: [
      "This was my first time using the styled-components - or any CSS-in-JSX styling - and also my first run with component composition.",
      "Firebase made it super quick to get set up with user auth, and Fuse.js provided a simple and effective search solution that was easy to get working with quickly.",
    ],
    links: [
      { type: "Visit", url: "https://notreallynetflix.vercel.app/" },
      { type: "GitHub", url: "https://github.com/budokans/netflix-clone" },
    ],
  },
  {
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
    description: [
      "My first time using a React UI component library instead of building most components entirely from scratch, and I'm happy with the result, scoring 100/100 in Performance, Accessibility, Best Practices and SEO with Google Lighthouse.",
      "I chose new-kid-on-the-block Chakra UI because I liked the docs and its rapid uptake among developers, and Chakra integrates easily with Framer Motion to make draggable components and animations a breeze.",
      "Completely statically generated with Next.js so it's blazing fast, with images stored locally and optimized on-the-fly with Next's Image component.",
      "Deployed on Vercel, and crafted using the Develop, Preview, Ship workflow.",
    ],
    links: [
      { type: "GitHub", url: "https://github.com/budokans/personal-site" },
    ],
  },
];
