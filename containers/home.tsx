import { ReactElement } from "react";
import { SiteMetadata, Project } from "../types";
import { Header, Home, Portfolio } from "../components/home";
import { TextLink } from "../components/Link";

interface HomeContainerProps {
  readonly projects: readonly Project[];
  readonly metadata: SiteMetadata;
  readonly onPortfolioClick: (id: string) => void;
}

export const HomeContainer = ({
  projects,
  metadata,
  onPortfolioClick,
}: HomeContainerProps): ReactElement => {
  return (
    <Home.Home>
      <Header.Header>
        <Header.Heading>
          Hi, I&apos;m Steven. I&apos;m a full-stack developer who&apos;s helped
          build <TextLink url="https://rico.nz">Rico</TextLink> and{" "}
          <TextLink url="https://www.pivot-pointe.com">Pivot Pointe</TextLink>.
          I&apos;d love to help you with your software goals. Get in touch!
        </Header.Heading>

        <Header.HeaderContact>
          <Header.HeaderLocation>📍 {metadata.location}</Header.HeaderLocation>
          <Header.HeaderLinks contacts={metadata.contacts} />
        </Header.HeaderContact>
      </Header.Header>

      <Portfolio.Portfolio>
        {projects.map((project, idx) => {
          return (
            <Portfolio.PortfolioItem
              onPortfolioClick={onPortfolioClick}
              id={project.id}
              key={idx}
            >
              <Portfolio.PortfolioImage
                src={project.icon}
                alt={project.title}
              />
              <Portfolio.PortfolioInner
                idx={idx}
                projectsCount={projects.length}
              >
                <Portfolio.PortfolioTitle>
                  {project.title}
                </Portfolio.PortfolioTitle>
                <Portfolio.PortfolioText>
                  {project.shortBlurb}
                </Portfolio.PortfolioText>
              </Portfolio.PortfolioInner>
            </Portfolio.PortfolioItem>
          );
        })}
      </Portfolio.Portfolio>
    </Home.Home>
  );
};
