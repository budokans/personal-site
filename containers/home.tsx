import { Flex } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFeatureContext } from "../lib/featureContext";
import { ApplicationProps } from "../interfaces";
import {
  Header,
  HeaderText,
  HeaderLinks,
  HeaderLinksButton,
  HeaderLinksTooltip,
} from "../components/home/Header";
import {
  Portfolio,
  PortfolioItem,
  PortfolioItemImage,
  PortfolioItemInner,
  PortfolioItemTitle,
  PortfolioItemText,
} from "../components/home/Portfolio";

export const HomeContainer: React.FC<ApplicationProps> = ({
  projects,
  metadata,
}) => {
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");
  const [isLargeDevice, setIsLargeDevice] = useState(false);
  const { showFeature } = useFeatureContext();

  useEffect(() => {
    isLargerThan930 ? setIsLargeDevice(true) : setIsLargeDevice(false);
  }, [isLargerThan930]);

  return (
    <Wrapper blur={showFeature}>
      <Header>
        <HeaderText>{metadata.description}</HeaderText>
        <HeaderLinks>
          {isLargeDevice ? (
            <HeaderLinksTooltip href={metadata.contact.email}>
              Email
            </HeaderLinksTooltip>
          ) : (
            <HeaderLinksButton href={`mailto:${metadata.contact.email}`}>
              Email
            </HeaderLinksButton>
          )}

          <HeaderLinksButton href={metadata.contact.github}>
            Github
          </HeaderLinksButton>

          <HeaderLinksButton href={metadata.contact.linkedIn}>
            LinkedIn
          </HeaderLinksButton>
        </HeaderLinks>
      </Header>

      <Portfolio>
        {projects.map((project, idx) => {
          return (
            <PortfolioItem idx={idx} key={idx}>
              <PortfolioItemImage src={project.icon} alt={project.title} />
              <PortfolioItemInner idx={idx}>
                <PortfolioItemTitle>{project.title}</PortfolioItemTitle>
                <PortfolioItemText>{project.shortBlurb}</PortfolioItemText>
              </PortfolioItemInner>
            </PortfolioItem>
          );
        })}
      </Portfolio>
    </Wrapper>
  );
};

const Wrapper: React.FC<{ blur: boolean }> = ({ blur, children }) => {
  return (
    <Flex
      direction="column"
      justifyContent={["space-between", "center"]}
      alignItems="center"
      minHeight="100vh"
      py={8}
      px={4}
      maxW={["100%", "930px"]}
      marginY="0"
      marginX="auto"
      sx={
        blur
          ? { filter: "blur(5px)", transition: "filter 0.5s ease 0.5s" }
          : { filter: "blur(0px)", transition: "filter 0.5s ease" }
      }
    >
      {children}
    </Flex>
  );
};
