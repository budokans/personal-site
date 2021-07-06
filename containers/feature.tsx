import { useEffect } from "react";
import { Box, Divider } from "@chakra-ui/layout";
import parse from "html-react-parser";
import { ProjectInterface } from "../interfaces";
import { Feature } from "../components/feature/Feature";
import { Header } from "../components/feature/Header";
import { Tech } from "../components/feature/Tech";
import { Description } from "../components/feature/Description";
import { Links } from "../components/feature/Link";
import { CarouselContainer } from "../containers/carousel";

interface FeatureProps {
  project: ProjectInterface;
  onCloseClick: () => void;
}

export const FeatureContainer: React.FC<FeatureProps> = ({
  project,
  onCloseClick,
}) => {
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    return () => {
      document.getElementsByTagName("body")[0].style.overflow = "visible";
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
    <Feature>
      <Feature.Container
        variants={containerVariants}
        onCloseClick={onCloseClick}
      >
        <Feature.CloseButton onCloseClick={onCloseClick} />

        <Header>
          <Header.Image src={project.icon} alt={project.title} />
          <Header.Inner>
            <Header.Text>{project.title}</Header.Text>
            <Header.Subtext>{project.shortBlurb}</Header.Subtext>
          </Header.Inner>
        </Header>

        <Box py={4} px={[4, 9]}>
          <Divider orientation="horizontal" />
        </Box>

        <Feature.Inner>
          <Tech>
            <Tech.Header>Tech</Tech.Header>
            <Tech.Inner>
              {project.tech.map((tech, idx) => {
                return <Tech.Badge key={idx}>{tech}</Tech.Badge>;
              })}
            </Tech.Inner>
          </Tech>

          <CarouselContainer media={project.featureMedia} />

          <Description>
            {project.description.map((paragraph, idx) => {
              return (
                <Description.Paragraph key={idx}>
                  {parse(paragraph)}
                </Description.Paragraph>
              );
            })}
          </Description>

          <Links>
            {project.links.map((link) => {
              return (
                <Links.Link url={link.url} key={link.type}>
                  {link.type}
                </Links.Link>
              );
            })}
          </Links>
        </Feature.Inner>
      </Feature.Container>
    </Feature>
  );
};
