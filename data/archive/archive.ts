import { NetflixCloneDescription } from "./NetflixClone";

export const archive = [
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
    description: NetflixCloneDescription,
    links: [
      { type: "Visit", url: "https://notreallynetflix.vercel.app/" },
      { type: "GitHub", url: "https://github.com/budokans/netflix-clone" },
    ],
  },
];
