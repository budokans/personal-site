import { MetadataInterface, ProjectInterface } from "../interfaces";
import { Home } from "../components/home/Home";
import { Header } from "../components/home/Header";
import { Portfolio } from "../components/home/Portfolio";

interface HomeContainerProps {
  projects: ProjectInterface[];
  metadata: MetadataInterface;
  onPortfolioClick: (id: number) => void;
  blur: boolean;
}

export const HomeContainer: React.FC<HomeContainerProps> = ({
  projects,
  metadata,
  onPortfolioClick,
  blur,
}) => {
  return (
    <Home blur={blur}>
      <Header>
        <Header.Text>{metadata.description}</Header.Text>
        <Header.Links contacts={metadata.contacts} />
      </Header>

      <Portfolio>
        {projects.map((project, idx) => {
          return (
            <Portfolio.Item
              onPortfolioClick={() => onPortfolioClick(idx)}
              key={idx}
            >
              <Portfolio.Image src={project.icon} alt={project.title} />
              <Portfolio.Inner idx={idx} projectsCount={projects.length}>
                <Portfolio.Title>{project.title}</Portfolio.Title>
                <Portfolio.Text>{project.shortBlurb}</Portfolio.Text>
              </Portfolio.Inner>
            </Portfolio.Item>
          );
        })}
      </Portfolio>
    </Home>
  );
};
