import { ReactElement, useState } from "react";
import { readonlyArray as A, function as F, option as O } from "fp-ts";
import { useToast } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { HomeContainer, FeatureContainer } from "containers";
import { DocHead, Feature } from "components";
import { projectsData, siteMetadata } from "data";

const IndexPage = (): ReactElement => {
  const [featuredProjectId, setFeaturedProjectId] = useState<O.Option<string>>(
    O.none
  );
  const toast = useToast();

  return (
    <>
      <DocHead metadata={siteMetadata} />

      <HomeContainer
        metadata={siteMetadata}
        projects={projectsData}
        onPortfolioClick={(id: string): void =>
          setFeaturedProjectId(O.some(id))
        }
      />

      <AnimatePresence>
        {F.pipe(
          featuredProjectId,
          O.match(
            // Force new line
            F.constNull,
            (featureId) =>
              F.pipe(
                projectsData,
                A.findFirst((project) => project.id === featureId),
                O.matchW(
                  () =>
                    toast({
                      title: "Sorry!",
                      description: "This project was not able to be displayed.",
                      status: "error",
                    }),
                  (project) => (
                    <FeatureContainer
                      project={project}
                      onCloseClick={(): void => setFeaturedProjectId(O.none)}
                    />
                  )
                )
              )
          )
        )}
      </AnimatePresence>

      {O.isSome(featuredProjectId) && <Feature.Overlay />}
    </>
  );
};

export default IndexPage;
