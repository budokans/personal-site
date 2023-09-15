import { ReactElement, useEffect } from "react";
import { Box, Divider } from "@chakra-ui/react";
import { Variants } from "framer-motion";
import { Project } from "../types";
import {
  Feature,
  Header,
  Tech,
  Description,
  Links,
} from "../components/feature";
import { ButtonLink } from "../components/Link";
import { CarouselContainer } from "../containers";

interface FeatureProps {
  readonly project: Project;
  readonly onCloseClick: () => void;
}

export const FeatureContainer = ({
  project,
  onCloseClick,
}: FeatureProps): ReactElement => {
  useEffect(() => {
    document.querySelector("body")!.style.overflow = "hidden";
    return () => {
      document.querySelector("body")!.style.overflow = "visible";
    };
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
    <Feature.Feature variants={containerVariants} onCloseClick={onCloseClick}>
      <Feature.FeatureCloseButton onCloseClick={onCloseClick} />

      <Header.Header>
        <Header.HeaderImage src={project.icon} alt={project.title} />
        <Header.HeaderInner>
          <Header.Heading>{project.title}</Header.Heading>
          <Header.Subheading>{project.shortBlurb}</Header.Subheading>
        </Header.HeaderInner>
      </Header.Header>

      <Box py={4} px={[4, 9]}>
        <Divider orientation="horizontal" />
      </Box>

      <Feature.FeatureInner>
        <Tech.Tech>
          <Tech.TechHeader>Tech</Tech.TechHeader>
          <Tech.TechInner>
            {project.tech.map((tech, idx) => {
              return <Tech.TechBadge key={idx}>{tech}</Tech.TechBadge>;
            })}
          </Tech.TechInner>
        </Tech.Tech>

        <CarouselContainer media={project.featureMedia} />

        <Description.Description>
          {project.description()}
        </Description.Description>

        <Links.Links>
          {project.links.map((link) => {
            return (
              <ButtonLink url={link.url} key={link.type}>
                {link.type}
              </ButtonLink>
            );
          })}
        </Links.Links>
      </Feature.FeatureInner>
    </Feature.Feature>
  );
};
