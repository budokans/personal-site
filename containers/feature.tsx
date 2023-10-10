import { ReactElement, useEffect } from "react";
import { Box, Divider } from "@chakra-ui/react";
import { Variants } from "framer-motion";
import { Project } from "types";
import { Feature, Link } from "components";
import { CarouselContainer } from "containers";

interface FeatureProps {
  readonly project: Project;
  readonly onCloseClick: () => void;
}

export const FeatureContainer = ({
  project,
  onCloseClick,
}: FeatureProps): ReactElement => {
  // Prevent scroll of body element when Feature is rendered.
  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = "visible";
      };
    }

    return;
  }, []);

  const containerVariants: Variants = {
    hidden: {
      height: "0%",
    },
    visible: {
      height: "95%",
      transition: {
        type: "spring",
        mass: 0.3,
        damping: 10,
      },
    },
    exit: {
      height: "0%",
      transition: {
        type: "just",
      },
    },
  };

  return (
    <Feature.Container variants={containerVariants} onCloseClick={onCloseClick}>
      <Feature.CloseButton onCloseClick={onCloseClick} />

      <Feature.Header.Header>
        <Feature.Header.Image src={project.icon} alt={project.title} />
        <Feature.Header.Inner>
          <Feature.Header.Heading>{project.title}</Feature.Header.Heading>
          <Feature.Header.Subheading>
            {project.shortBlurb}
          </Feature.Header.Subheading>
        </Feature.Header.Inner>
      </Feature.Header.Header>

      <Box py={4} px={[4, 9]}>
        <Divider orientation="horizontal" />
      </Box>

      <Feature.Inner>
        <Feature.Tech.Tech>
          <Feature.Tech.Header>Tech</Feature.Tech.Header>
          <Feature.Tech.Inner>
            {project.tech.map((tech, idx) => (
              <Feature.Tech.Badge key={idx}>{tech}</Feature.Tech.Badge>
            ))}
          </Feature.Tech.Inner>
        </Feature.Tech.Tech>

        <CarouselContainer media={project.featureMedia} />

        <Feature.Description.Description>
          {project.description()}
        </Feature.Description.Description>

        <Feature.Links.Links>
          {project.links.map((link) => (
            <Link.ButtonLink url={link.url} key={link.type}>
              {link.type}
            </Link.ButtonLink>
          ))}
        </Feature.Links.Links>
      </Feature.Inner>
    </Feature.Container>
  );
};
