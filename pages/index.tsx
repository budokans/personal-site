import { GetStaticProps } from "next";
import { ApplicationProps } from "../interfaces";
import { getData } from "../lib/getData";
import DocHead from "../components/DocHead";
import { AnimateContainer } from "../components/Motion";
import { HomeContainer } from "../containers/home";
import { FeatureContainer } from "../containers/feature";
import { useState } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const [metadata, projects] = getData();
  return {
    props: {
      metadata,
      projects,
    },
  };
};

const IndexPage: React.FC<ApplicationProps> = ({ metadata, projects }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [featuredProjectId, setFeaturedProjectId] = useState(0);
  const featuredProject = projects[featuredProjectId];

  const openFeature = (id: number) => {
    setFeaturedProjectId(id);
    setShowFeature(true);
  };

  return (
    <>
      <DocHead metadata={metadata} />

      <HomeContainer
        metadata={metadata}
        projects={projects}
        onPortfolioClick={openFeature}
        showFeature={showFeature}
      />

      <AnimateContainer>
        {showFeature && (
          <FeatureContainer
            project={featuredProject}
            setShowFeature={setShowFeature}
          />
        )}
      </AnimateContainer>
    </>
  );
};

export default IndexPage;
