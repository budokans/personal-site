import { ListItem, UnorderedList } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Description, Links } from "..";

export const PivotPointeDescription = (): ReactElement => (
  <>
    <Description.DescriptionParagraph>
      Building{" "}
      <Links.TextLink url="https://www.pivot-pointe.com/">
        pivot-pointe.com
      </Links.TextLink>{" "}
      was a super fun project. I loved working with a start-up founder to design
      and build something that met their business needs and made them and their
      customers happy.
    </Description.DescriptionParagraph>

    <Description.DescriptionParagraph>
      Pivot Pointe Limited is a company that offers career transition programs,
      marketing consulting, and a blog focusing on career transition for ballet
      dancers.
    </Description.DescriptionParagraph>

    <Description.DescriptionParagraph>
      Within three weeks of first contact with the client, I had:
    </Description.DescriptionParagraph>

    <UnorderedList>
      <ListItem>
        Architected, designed (UI/UX), and developed a type-safe, bug-free
        full-stack career transition course app
      </ListItem>
      <ListItem>
        Migrated their marketing and blog site from Wix to{" "}
        <Links.TextLink url="https://webflow.com/">Webflow</Links.TextLink> and
        created a new CMS template for e-commerce products
      </ListItem>
      <ListItem>
        Integrated the Webflow site with{" "}
        <Links.TextLink url="https://www.memberstack.com/">
          Memberstack
        </Links.TextLink>{" "}
        and designed, tested, and built the purchase, log-in/sign-up flow
      </ListItem>
    </UnorderedList>

    <Description.DescriptionParagraph>
      Over the next month or so, I:
    </Description.DescriptionParagraph>

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
        <Links.TextLink url="http://vanilla-js.com/">
          vanilla JavaScript
        </Links.TextLink>{" "}
        DOM manipulation code with JQuery
      </ListItem>
      <ListItem>Wrote a thorough user manual for the client</ListItem>
    </UnorderedList>
  </>
);
