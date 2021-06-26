import { Box, Divider } from "@chakra-ui/layout";
import parse from "html-react-parser";
import { useFeatureContext } from "../lib/featureContext";
import { ProjectInterface } from "../interfaces";
import { AnimateContainer } from "../components/Motion";
import {
  Feature,
  Container,
  FeatureCloseBtn,
  FeatureInner,
} from "../components/feature/Feature";
import {
  FeatureHeader,
  HeaderImage,
  HeaderInner,
  HeaderText,
  HeaderSubtext,
} from "../components/feature/FeatureHeader";
import {
  FeatureTech,
  TechHeader,
  TechInner,
  TechBadge,
} from "../components/feature/FeatureTech";
import {
  Description,
  Paragraph,
} from "../components/feature/FeatureDescription";
import FeatureVisit from "../components/feature/FeatureVisit";
import FeatureCarouselContainer from "../components/feature/FeatureCarouselContainer";

interface FeatureProps {
  project: ProjectInterface;
}

export const FeatureContainer: React.FC<FeatureProps> = ({ project }) => {
  const { showFeature, closeFeature, node } = useFeatureContext();

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
    <AnimateContainer>
      {showFeature ? (
        <Feature>
          <Container variants={containerVariants} node={node}>
            <FeatureCloseBtn onClick={closeFeature} />

            <FeatureHeader>
              <HeaderImage src={project.icon} alt={project.title} />
              <HeaderInner>
                <HeaderText>{project.title}</HeaderText>
                <HeaderSubtext>{project.shortBlurb}</HeaderSubtext>
              </HeaderInner>
            </FeatureHeader>

            <Box py={4} px={[4, 9]}>
              <Divider orientation="horizontal" />
            </Box>

            <FeatureInner>
              <FeatureTech>
                <TechHeader>Tech</TechHeader>
                <TechInner>
                  {project.tech.map((tech, idx) => {
                    return <TechBadge key={idx}>{tech}</TechBadge>;
                  })}
                </TechInner>
              </FeatureTech>

              <FeatureCarouselContainer media={project.featureMedia} />

              <Description>
                {project.description.map((paragraph, idx) => {
                  return <Paragraph key={idx}>{parse(paragraph)}</Paragraph>;
                })}
              </Description>

              {/* Don't display FeatureVisit for stevenwebster.co */}
              {project.url && <FeatureVisit url={project.url} />}
            </FeatureInner>
          </Container>
        </Feature>
      ) : null}
    </AnimateContainer>
  );
};
