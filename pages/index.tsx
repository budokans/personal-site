import { ReactElement, useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { AnimatePresence } from "framer-motion";
import { getProjectData, getSiteMetadata } from "../lib/getData";
import { DocHead } from "../components/DocHead";
import { HomeContainer } from "../containers/home";
import { FeatureContainer } from "../containers/feature";
import { function as F, either as E } from "fp-ts";

export const getStaticProps: GetStaticProps = () =>
  F.pipe(
    E.Do,
    E.bind("projects", getProjectData),
    E.bind("metadata", getSiteMetadata),
    E.matchW(
      () => ({ notFound: true }),
      ({ projects, metadata }) => ({
        props: {
          projects,
          metadata,
        },
      })
    )
  );

const IndexPage = ({
  metadata,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const [showFeature, setShowFeature] = useState(false);
  const [featuredProjectId, setFeaturedProjectId] = useState(0);
  const featuredProject = projects[featuredProjectId];

  const openFeature = (id: number): void => {
    setFeaturedProjectId(id);
    setShowFeature(true);
  };

  const closeFeature = (): void => {
    setShowFeature(false);
  };

  return (
    <>
      <DocHead metadata={metadata} />

      <HomeContainer
        metadata={metadata}
        projects={projects}
        onPortfolioClick={openFeature}
        blur={showFeature}
      />

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

export default IndexPage;
