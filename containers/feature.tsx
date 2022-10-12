import { ReactElement, useEffect } from "react";
import { Box, Divider } from "@chakra-ui/react";
import parse from "html-react-parser";
import { Project } from "../interfaces";
import * as Feature from "../components/feature/Feature";
import * as Header from "../components/feature/Header";
import * as Tech from "../components/feature/Tech";
import * as Description from "../components/feature/Description";
import * as Links from "../components/feature/Link";
import { CarouselContainer } from "../containers/carousel";

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

  const containerVariants = {
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
        type: "spring",
        mass: 0.3,
        damping: 8,
      },
    },
  };

  return (
    <Feature.Feature>
      <Feature.FeatureContainer
        variants={containerVariants}
        onCloseClick={onCloseClick}
      >
        <Feature.FeatureCloseButton onCloseClick={onCloseClick} />

        <Header.Header>
          <Header.HeaderImage src={project.icon} alt={project.title} />
          <Header.HeaderInner>
            <Header.HeaderText>{project.title}</Header.HeaderText>
            <Header.HeaderSubtext>{project.shortBlurb}</Header.HeaderSubtext>
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
                return (
                  <Tech.TechBadge
                    key={idx}
                    isLast={!!(idx === project.tech.length - 1)}
                  >
                    {tech}
                  </Tech.TechBadge>
                );
              })}
            </Tech.TechInner>
          </Tech.Tech>

          <CarouselContainer media={project.featureMedia} />

          <Description.Description>
            {project.description.map((paragraph, idx) => {
              return (
                <Description.DescriptionParagraph key={idx}>
                  {parse(paragraph)}
                </Description.DescriptionParagraph>
              );
            })}
          </Description.Description>

          <Links.Links>
            {project.links.map((link) => {
              return (
                <Links.Link url={link.url} key={link.type}>
                  {link.type}
                </Links.Link>
              );
            })}
          </Links.Links>
        </Feature.FeatureInner>
      </Feature.FeatureContainer>
    </Feature.Feature>
  );
};
