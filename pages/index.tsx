import { ReactElement, useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { AnimatePresence } from "framer-motion";
import { function as F, either as E } from "fp-ts";
import { getProjectData, getSiteMetadata } from "../lib/getData";
import { DocHead } from "../components/DocHead";
import { HomeContainer, FeatureContainer } from "../containers";
import { Feature } from "../components/feature";

export const getStaticProps: GetStaticProps = () =>
  F.pipe(
    E.Do,
    E.bind("projects", getProjectData),
    E.bind("metadata", getSiteMetadata),
    E.match(
      (errors) => {
        console.log(errors);
        return {
          props: {},
        };
      },
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
      />

      <AnimatePresence>
        {showFeature && (
          <FeatureContainer
            project={featuredProject}
            onCloseClick={closeFeature}
          />
        )}
      </AnimatePresence>

      {showFeature && <Feature.Overlay />}
    </>
  );
};

export default IndexPage;
