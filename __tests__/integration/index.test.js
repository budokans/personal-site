import { render, screen, waitFor } from "test-utils";
import userEvent from "@testing-library/user-event";
import matchMediaPolyfill from "mq-polyfill";
import IndexPage from "../../pages/index";

const projects = [
  {
    title: "Story Typer",
    shortBlurb:
      "A race-the-clock, retro-themed speed-typing game for desktop browsers with context scraped daily from fiftywordstories.com",
    icon: "/images/story-typer-logo.jpg",
    iconFallback: "",
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
    description: [
      "Finding myself spending a lot of time on speed-typing apps like <a href='https://play.typeracer.com' rel='noreferrer noopener' target='_blank' style='font-weight: 500'>TypeRacer</a>, I decided to craft one of my own for my first React project.",
      "Rather than the usual open-ended stopwatch-timed game, I decided to go for a countdown clock to put more pressure on the player. This necessitated texts of roughly equal length - enter <a href='http://fiftywordstories.com' rel='noreferrer noopener' target='_blank' style='font-weight: 500'>fiftywordstories.com</a>.",
      "Unhappy with the overhead of manually inputting the stories and other meta information myself, I built an Express server and wrote a scraper with Cheerio JS that pushes all the scraped data to a mongoDB server.",
      "It was also a great Regex workout to get all the formatting done correctly as the stories are scraped!",
    ],
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
    description: [
      "My first time using a React UI component library instead of building most components entirely from scratch, and I'm happy with the result, scoring 100/100 in Performance, Accessibility, Best Practices and SEO with Google Lighthouse.",
      "I chose new-kid-on-the-block Chakra UI over more established alternatives like Material UI, and Chakra integrates easily with Framer Motion to make draggable components and animations a breeze.",
      "Completely statically generated with Next.js so it's blazing fast, with images stored locally and optimized on-the-fly with Next's Image component.",
      "Deployed on Vercel, and crafted using the Develop, Preview, Ship workflow.",
    ],
    links: [
      { type: "GitHub", url: "https://github.com/budokans/personal-site" },
    ],
  },
];

const metadata = {
  description:
    "Steven Webster is a full-stack developer who cares about scalability, performance and elegant, intuitive UIs. Working remotely from Auckland, NZ.",
  canonical: "https://stevenwebster.co",
  contacts: [
    { type: "Email", value: "contact@stevenwebster.co" },
    { type: "Github", value: "https://github.com/budokans" },
    {
      type: "LinkedIn",
      value: "https://www.linkedin.com/in/steven-webster-developer/",
    },
  ],
};

describe("./index", () => {
  test("renders the <HomeContainer />", () => {
    render(<IndexPage metadata={metadata} projects={projects} />);

    expect(
      screen.getByText(/Steven Webster is a full-stack/i)
    ).toBeInTheDocument();
  });

  test("clicking a <Portfolio.Item /> renders the relevant <FeatureContainer />", async () => {
    render(<IndexPage metadata={metadata} projects={projects} />);

    userEvent.click(screen.getByText(/Story Typer/i));
    expect(screen.getByText(projects[0].description[3])).toBeInTheDocument();
    userEvent.click(screen.getByTestId("close-feature"));
    await waitFor(() =>
      expect(
        screen.queryByText(projects[0].description[3])
      ).not.toBeInTheDocument()
    );

    userEvent.click(screen.getByText(/stevenwebster.co/i));
    expect(screen.getByText(projects[1].description[3])).toBeInTheDocument();
    userEvent.click(screen.getByTestId("close-feature"));
    await waitFor(() =>
      expect(
        screen.queryByText(projects[1].description[3])
      ).not.toBeInTheDocument()
    );
  });

  test("<Portfolio.TooltipBtn /> renders the correct text", async () => {
    matchMediaPolyfill(global);

    global.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
    global.resizeTo(930, 1000);

    render(<IndexPage metadata={metadata} projects={projects} />);

    expect(screen.queryByText(/Click to Copy!/i)).not.toBeInTheDocument();
    userEvent.hover(screen.getByTestId(/Tooltip/i));
    await waitFor(() =>
      expect(screen.getByText(/Click to Copy!/i)).toBeInTheDocument()
    );
  });
});
