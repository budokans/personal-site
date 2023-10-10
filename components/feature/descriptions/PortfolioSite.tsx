import { ReactElement } from "react";
import { Feature, Link } from "components";

export const PortfolioSiteDescription = (): ReactElement => (
  <>
    <Feature.Description.Paragraph>
      The primary aim of this project was to build a simple, elegant site to
      showcase my work. A secondary one was building something nice enough to
      showcase on its own.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      While looking for design ideas, I found{" "}
      <Link.TextLink url="https://derolez.dev">
        one I liked so much
      </Link.TextLink>{" "}
      that I decided to reverse-engineer it for a fun challenge.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      Using this reverse-engineering approach meant I got my hands dirty with
      the <Link.TextLink url="https://chakra-ui.com/">Chakra UI</Link.TextLink>{" "}
      React component library and{" "}
      <Link.TextLink url="https://www.framer.com/motion/">
        Framer Motion
      </Link.TextLink>
      , a React animation library.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      I used{" "}
      <Link.TextLink url="https://testing-library.com/">
        React Testing Library
      </Link.TextLink>{" "}
      for UI interaction and snapshot testing, testing as I developed. However,
      code that failed tests occasionally would end up on the master branch. To
      prevent this, I implemented a GitHub Actions workflow that runs the test
      suite after commits are made in pull requests.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      It scores 100/100 in Performance, Accessibility, Best Practices, and SEO
      in Chrome Developer Tools&apos; Google Lighthouse tests.
    </Feature.Description.Paragraph>
  </>
);
