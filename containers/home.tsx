import { SiteMetadata, Project } from "../interfaces";
import { Home } from "../components/home/Home";
import * as Header from "../components/home/Header";
import * as Portfolio from "../components/home/Portfolio";
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
    <Home blur={blur}>
      <Header.Header>
        <Header.HeaderText>{metadata.description}</Header.HeaderText>
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
    </Home>
  );
};
