import { ListItem, UnorderedList } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Feature, Link } from "components";

export const ImagineTeesDescription = (): ReactElement => (
  <>
    <Feature.Description.Paragraph>
      <Link.TextLink url="https://imaginetees.ai">imaginetees.ai</Link.TextLink>{" "}
      is a generative AI-driven e-commerce store that leverages APIs to
      outsource printing and shipping.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      I joined a team of 3 developers and a designer at the beginning of the
      project and was responsible for architecting and implementing all frontend
      features. I:
    </Feature.Description.Paragraph>

    <UnorderedList>
      <ListItem>
        Set up project dependencies and tooling, including TypeScript, Jest,
        Husky, ESLint, lint-staged, GitHub, Prettier and Vercel
      </ListItem>
      <ListItem>
        Brought our Figma designs to life with reusable React components,
        leveraging Material UI with a custom theme for rapid development,
        significantly less hard-coding of styling and built-in accessibility
      </ListItem>
      <ListItem>
        Built a complex UI that handles dependent querying for product selection
        and customization, as well as our cart and checkout with Stripe
      </ListItem>
      <ListItem>
        Lent a hand to team members who were less familiar with Git, TypeScript,
        and some aspects of API design and database management
      </ListItem>
    </UnorderedList>
  </>
);
