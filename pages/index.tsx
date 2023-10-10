import { ReactElement, useState } from "react";
import { readonlyArray as A, function as F, option as O } from "fp-ts";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useToast } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { HomeContainer, FeatureContainer } from "containers";
import { DocHead, Feature } from "components";
import { projectsData, siteMetadata } from "data";
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
  const [featuredProjectId, setFeaturedProjectId] = useState<O.Option<string>>(
    O.none
  );
  const toast = useToast();

  return (
    <>
      <DocHead metadata={metadata} />

      <HomeContainer
        metadata={metadata}
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
