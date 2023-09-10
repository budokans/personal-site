import { Project } from "types";

export const projectsData: readonly Project[] = [
  {
    title: "Gretsch Geeks",
    shortBlurb:
      "An example E-commerce buy-sell platform built with modern React, Apollo 3 and Keystone.js as a headless CMS.",
    icon: "/images/gretsch-logo.jpg",
    tech: [
      "React",
      "Next.js",
      "styled-components",
      "Apollo 3",
      "Keystone.js",
      "GraphQL",
      "postgreSQL",
      "Stripe",
    ],
    featureMedia: [
      {
        path: "/images/gretsch-geeks-store-screenshot.png",
        bg: "#ff0000",
        alt: "Gretsch Geeks Store Screenshot",
      },
      {
        path: "/images/gretsch-geeks-cart-open-screenshot.png",
        bg: "#393939",
        alt: "Gretsch Geeks with Cart Open Screenshot",
      },
      {
        path: "/images/gretsch-geeks-order-page-screenshot.png",
        bg: "#fff",
        alt: "Gretsch Geeks Order Page Screenshot",
      },
      {
        path: "/images/gretsch-geeks-admin-area-screenshot.png",
        bg: "#3b82f6",
        alt: "Gretsch Geeks Admin Area Screenshot",
      },
      {
        path: "/images/gretsch-geeks-performance-screenshot.png",
        bg: "white",
        alt: "Gretsch Geeks Lighthouse Performance Screenshot",
      },
    ],
    description: [
      "The foundations of the project were laid while completing Wes Bos's huge <a href='https://advancedreact.com/' rel='noreferrer noopener' target='_blank' style='font-weight: 500'>Advanced React with GraphQL</a> course, but the final result was buggy and impossible to deploy in its finished state.",
      "To fix this, I added much more robust error-handling throughout the application, rebuilt the app with the latest version of Keystone JS, rebuilt the database in postgreSQL as Keystone had now dropped support for Mongoose and moved to Prisma, and successfully deployed to Heroku.",
      "I also fixed a litany of other bugs, created all mobile styles and made the frontend responsive, eliminated Cumulative Layout Shift and made the app much more intuitive to use.",
    ],
    links: [
      { type: "Visit", url: "https://gretsch.stevenwebster.co" },
      { type: "GitHub", url: "https://github.com/budokans/gretsch-geeks" },
    ],
  },
];
