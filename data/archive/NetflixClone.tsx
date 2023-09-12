import { ReactElement } from "react";
import { Description, Links } from "../../components/feature";

export const NetflixCloneDescription = (): ReactElement => (
  <>
    <Description.DescriptionParagraph>
      This was my first time using{" "}
      <Links.TextLink url="https://styled-components.com/">
        styled-components
      </Links.TextLink>{" "}
      and also my first run with component composition.
    </Description.DescriptionParagraph>

    <Description.DescriptionParagraph>
      Firebase made it super quick to get set up with user auth, and Fuse.js
      provided a simple and effective search solution that was easy to implement
      quickly.
    </Description.DescriptionParagraph>

    <Description.DescriptionParagraph>
      Disclaimer: This project was initially built with help from a tutorial,
      but no copy-pasting went on!
    </Description.DescriptionParagraph>
  </>
);
