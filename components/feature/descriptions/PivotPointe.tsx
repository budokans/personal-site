import { ListItem, UnorderedList } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Feature, Link } from "components";

export const PivotPointeDescription = (): ReactElement => (
  <>
    <Feature.Description.Paragraph>
      Building{" "}
      <Link.TextLink url="https://www.pivot-pointe.com/">
        pivot-pointe.com
      </Link.TextLink>{" "}
      was a super fun project. I loved working with the founder to design and
      build something that met their business needs and made them and their
      customers happy.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      Pivot Pointe Limited is a company that offers career transition programs,
      marketing consulting, and a blog focusing on career transition for ballet
      dancers.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      Within three weeks of first contact with the client, I had:
    </Feature.Description.Paragraph>

    <UnorderedList>
      <ListItem>
        Architected, designed (UI/UX), and developed a type-safe, bug-free
        full-stack career transition course app
      </ListItem>
      <ListItem>
        Migrated their marketing and blog site from Wix to{" "}
        <Link.TextLink url="https://webflow.com/">Webflow</Link.TextLink> and
        created a new CMS template for e-commerce products
      </ListItem>
      <ListItem>
        Integrated the Webflow site with{" "}
        <Link.TextLink url="https://www.memberstack.com/">
          Memberstack
        </Link.TextLink>{" "}
        and designed, tested, and built the purchase, log-in/sign-up flow
      </ListItem>
    </UnorderedList>

    <Feature.Description.Paragraph>
      Over the next month or so, I:
    </Feature.Description.Paragraph>

    <UnorderedList>
      <ListItem>
        Designed (UI/UX) and developed the remainder of the career transition
        program units
      </ListItem>
      <ListItem>
        Wrote a Google Sheets parser in TypeScript to extract content data
      </ListItem>
      <ListItem>
        Tested and implemented seeding and retrieval of content data in a
        Firebase Firestore document store
      </ListItem>
      <ListItem>
        Incrementally refactored to get page bundles within the 10k character
        limit that Webflow enforces. This refactoring involved rewriting{" "}
        <Link.TextLink url="http://vanilla-js.com/">
          vanilla JavaScript
        </Link.TextLink>{" "}
        DOM manipulation code with JQuery
      </ListItem>
      <ListItem>Wrote a thorough user manual for the client</ListItem>
    </UnorderedList>
  </>
);
