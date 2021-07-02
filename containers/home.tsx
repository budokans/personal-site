import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MetadataInterface, ProjectInterface } from "../interfaces";
import { FeatureContainer } from "../containers/feature";
import { Home } from "../components/home/Home";
import { Header } from "../components/home/Header";
import { Portfolio } from "../components/home/Portfolio";

interface HomeContainerProps {
  projects: ProjectInterface[];
  metadata: MetadataInterface;
}

export const HomeContainer: React.FC<HomeContainerProps> = ({
  projects,
  metadata,
}) => {
  const [showFeature, setShowFeature] = useState(false);
  const [featuredProjectId, setFeaturedProjectId] = useState(0);
  const featuredProject = projects[featuredProjectId];

  const openFeature = (id: number) => {
    setFeaturedProjectId(id);
    setShowFeature(true);
  };

  const closeFeature = () => {
    setShowFeature(false);
  };

  return (
    <>
      <Home blur={showFeature}>
        <Header>
          <Header.Text>{metadata.description}</Header.Text>
          <Header.Links contacts={metadata.contacts} />
        </Header>

        <Portfolio>
          {projects.map((project, idx) => {
            return (
              <Portfolio.Item
                onPortfolioClick={() => openFeature(idx)}
                key={idx}
              >
                <Portfolio.Image src={project.icon} alt={project.title} />
                <Portfolio.Inner idx={idx}>
                  <Portfolio.Title>{project.title}</Portfolio.Title>
                  <Portfolio.Text>{project.shortBlurb}</Portfolio.Text>
                </Portfolio.Inner>
              </Portfolio.Item>
            );
          })}
        </Portfolio>
      </Home>

      <AnimatePresence>
        {showFeature && (
          <FeatureContainer
            project={featuredProject}
            onCloseClick={closeFeature}
          />
        )}
      </AnimatePresence>
    </>
  );
};
