import { ReactElement, useState } from "react";
import { readonlyArray as A, function as F, option as O } from "fp-ts";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useToast } from "@chakra-ui/react";
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
  const [featuredProjectId, setFeaturedProjectId] = useState<O.Option<string>>(
    O.none
  );
  const toast = useToast();

  return (
    <>
      <DocHead metadata={metadata} />

      <HomeContainer
        metadata={metadata}
        projects={projects}
        onPortfolioClick={(id: string): void =>
          setFeaturedProjectId(O.some(id))
        }
      />

      <AnimatePresence>
        {F.pipe(
          featuredProjectId,
          O.match(F.constNull, (featureId) =>
            F.pipe(
              projects,
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

      {F.pipe(
        featuredProjectId,
        O.match(
          // Force new line
          F.constNull,
          () => <Feature.Overlay />
        )
      )}
    </>
  );
};

export default IndexPage;
