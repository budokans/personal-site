import { useEffect, useRef } from "react";
import { Box, Divider } from "@chakra-ui/layout";
import parse from "html-react-parser";
import { ProjectInterface } from "../interfaces";
import { Feature } from "../components/feature/Feature";
import { Header } from "../components/feature/Header";
import { Tech } from "../components/feature/Tech";
import { Description } from "../components/feature/Description";
import { Link } from "../components/feature/Link";
import FeatureCarouselContainer from "../components/feature/FeatureCarouselContainer";

interface FeatureProps {
  project: ProjectInterface;
  onCloseClick: () => void;
}

export const FeatureContainer: React.FC<FeatureProps> = ({
  project,
  onCloseClick,
}) => {
  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (node && node.current && node.current.contains(target)) {
      // inside click
      return;
    }
    // outside click
    onCloseClick();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <Feature.Container variants={containerVariants} node={node}>
        <Feature.CloseButton onClick={onCloseClick} />

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

          <FeatureCarouselContainer media={project.featureMedia} />

          <Description>
            {project.description.map((paragraph, idx) => {
              return (
                <Description.Paragraph key={idx}>
                  {parse(paragraph)}
                </Description.Paragraph>
              );
            })}
          </Description>

          {/* Don't display Visit link for stevenwebster.co */}
          {project.url && <Link url={project.url}>Visit</Link>}
        </Feature.Inner>
      </Feature.Container>
    </Feature>
  );
};
