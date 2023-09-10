import { ReactElement, useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { AnimatePresence } from "framer-motion";
import { DocHead } from "../components/DocHead";
import { HomeContainer, FeatureContainer } from "../containers";
import { Feature } from "../components/feature";
import { siteMetadata } from "../data/metadata";
import { projects } from "../data/projectsData";
import { SiteMetadata } from "types";

interface Props {
  readonly metadata: SiteMetadata;
}

export const getStaticProps: GetStaticProps<Props> = (): {
  readonly props: Props;
} => ({
  props: { metadata: siteMetadata },
});

const IndexPage = ({
  metadata,
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
