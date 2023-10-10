import { Code } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Feature, Link } from "components";

export const StoryTyperDescription = (): ReactElement => (
  <>
    <Feature.Description.Paragraph>
      Finding myself enjoying speed-typing games like{" "}
      <Link.TextLink url="https://play.typeracer.com">TypeRacer</Link.TextLink>,
      I decided to craft one of my own.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      Fifty-word stories are fetched from{" "}
      <Link.TextLink url="https://fiftywordstories.com/">
        fiftywordstories.com
      </Link.TextLink>{" "}
      via the WordPress API, and this operation is triggered daily by a Vercel
      CRON job that hits a serverless function at a Next.js API endpoint.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      I chose Next.js as a framework for its built-in routing, fast build time,
      and flexible rendering options. I employed its incremental static page
      generation on the homepage to balance a fast load time with up-to-date
      stories counter data.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      I used{" "}
      <Link.TextLink url="https://tanstack.com/query/latest">
        TanStack Query
      </Link.TextLink>{" "}
      to manage asynchronous state. It supplies a<Code>useInfiniteQuery</Code>{" "}
      hook, which I combined with the Intersection Observer API to implement
      infinite scrolling on the Archive and Favorites pages.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      Component composition is used throughout, with compound components
      composed in containers to improve readability and maintainability.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      Almost all application state is stored and manipulated in custom hooks,
      with global state (auth) and authenticated-only state (user, stories)
      accessible via the Context API.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      The scraper and parser were built using test-driven development with Jest.
      Firebase security rules were also written using TDD. Integration tests are
      noticeably absent - I will write them when time permits.
    </Feature.Description.Paragraph>

    <Feature.Description.Paragraph>
      I recently refactored this project using the{" "}
      <Link.TextLink url="https://github.com/gcanti/fp-ts">
        fp-ts library
      </Link.TextLink>
      , which I like because it forces me to follow good practices like keeping
      functions pure, acknowledging and handling all error cases, and making
      impossible states unrepresentable. Because some of the APIs used for
      convenience (TanStack Query, for example) aren&apos;t geared toward
      functional programming, the code on the border of the application is not
      strictly functional.
    </Feature.Description.Paragraph>
  </>
);
