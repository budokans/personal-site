import { SiteMetadata, Project } from "../types";
import { Header, Home, Portfolio } from "../components/home";
import { ReactElement } from "react";

interface HomeContainerProps {
  readonly projects: readonly Project[];
  readonly metadata: SiteMetadata;
  readonly onPortfolioClick: (id: number) => void;
  readonly blur: boolean;
}

export const HomeContainer = ({
  projects,
  metadata,
  onPortfolioClick,
  blur,
}: HomeContainerProps): ReactElement => {
  return (
    <Home.Home blur={blur}>
      <Header.Header>
        <Header.HeaderText>{metadata.description}</Header.HeaderText>
        <Header.HeaderLocation>{metadata.location}</Header.HeaderLocation>
        <Header.HeaderLinks contacts={metadata.contacts} />
      </Header.Header>

      <Portfolio.Portfolio>
        {projects.map((project, idx) => {
          return (
            <Portfolio.PortfolioItem
              onPortfolioClick={() => onPortfolioClick(idx)}
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
