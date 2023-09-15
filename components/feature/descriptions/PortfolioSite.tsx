import { ReactElement } from "react";
import { Description } from "..";
import { TextLink } from "../../Link";

export const PortfolioSiteDescription = (): ReactElement => (
  <>
    <Description.DescriptionParagraph>
      The primary aim of this project was to build a simple, elegant site to
      showcase my work. A secondary one was building something nice enough to
      showcase on its own.
    </Description.DescriptionParagraph>

    <Description.DescriptionParagraph>
      While looking for design ideas, I found{" "}
      <TextLink url="https://derolez.dev">one I liked so much</TextLink> that I
      decided to reverse-engineer it for a fun challenge.
    </Description.DescriptionParagraph>

    <Description.DescriptionParagraph>
      This reverse-engineering approach acquainted me with the{" "}
      <TextLink url="https://chakra-ui.com/">Chakra UI</TextLink> React
      component library, and{" "}
      <TextLink url="https://www.framer.com/motion/">Framer Motion</TextLink>, a
      React animation library.
    </Description.DescriptionParagraph>

    <Description.DescriptionParagraph>
      I used{" "}
      <TextLink url="https://testing-library.com/">
        React Testing Library
      </TextLink>{" "}
      for UI interaction and snapshot testing, testing as I developed. However,
      code that failed tests occasionally would end up on the master branch. To
      prevent this, I implemented a GitHub Actions workflow that runs the test
      suite after commits are made in pull requests.
    </Description.DescriptionParagraph>

    <Description.DescriptionParagraph>
      It scores 100/100 in Performance, Accessibility, Best Practices, and SEO
      in Chrome Developer Tools&apos; Google Lighthouse tests.
    </Description.DescriptionParagraph>
  </>
);
