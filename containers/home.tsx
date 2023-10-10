import { ReactElement } from "react";
import { SiteMetadata, Project } from "types";
import { Home, Link } from "components";

interface HomeContainerProps {
  readonly projects: readonly Project[];
  readonly metadata: SiteMetadata;
  readonly onPortfolioClick: (id: string) => void;
}

export const HomeContainer = ({
  projects,
  metadata,
  onPortfolioClick,
}: HomeContainerProps): ReactElement => (
  <Home.Container>
    <Home.Header.Header>
      <Home.Header.Heading>
        Hi, I&apos;m Steven. I&apos;m a full-stack developer who&apos;s helped
        build <Link.TextLink url="https://rico.nz">Rico</Link.TextLink> and{" "}
        <Link.TextLink url="https://www.pivot-pointe.com">
          Pivot Pointe
        </Link.TextLink>
        . I&apos;d love to help you with your software goals. Get in touch!
      </Home.Header.Heading>

      <Home.Header.Contact>
        <Home.Header.Location>📍 {metadata.location}</Home.Header.Location>
        <Home.Header.Links contacts={metadata.contacts} />
      </Home.Header.Contact>
    </Home.Header.Header>

    <Home.Portfolio.Portfolio>
      {projects.map((project, idx) => (
        <Home.Portfolio.Item
          onPortfolioClick={onPortfolioClick}
          id={project.id}
          key={idx}
        >
          <Home.Portfolio.Image src={project.icon} alt={project.title} />
          <Home.Portfolio.Inner idx={idx} projectsCount={projects.length}>
            <Home.Portfolio.Title>{project.title}</Home.Portfolio.Title>
            <Home.Portfolio.Text>{project.shortBlurb}</Home.Portfolio.Text>
          </Home.Portfolio.Inner>
        </Home.Portfolio.Item>
      ))}
    </Home.Portfolio.Portfolio>
  </Home.Container>
);
