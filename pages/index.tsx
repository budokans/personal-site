import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/react";
import { useFeatureContext } from "../lib/featureContext";
import { ApplicationProps } from "../interfaces";
import { getData } from "../lib/getData";
import DocHead from "../components/DocHead";
import {
  Header,
  HeaderText,
  HeaderLinks,
  HeaderLinksButton,
  HeaderLinksTooltip,
} from "../components/Header";
import {
  Portfolio,
  PortfolioItem,
  PortfolioItemImage,
  PortfolioItemInner,
  PortfolioItemTitle,
  PortfolioItemText,
} from "../components/Portfolio";
import Feature from "../components/Feature";

export const getStaticProps: GetStaticProps = async () => {
  const [metadata, projects] = getData();
  return {
    props: {
      metadata,
      projects,
    },
  };
};

const IndexPage: React.FC<ApplicationProps> = ({ metadata, projects }) => {
  const { projectToFeature, showFeature } = useFeatureContext();
  const project = projects[projectToFeature];

  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");
  const [isLargeDevice, setIsLargeDevice] = useState(false);

  useEffect(() => {
    isLargerThan930 ? setIsLargeDevice(true) : setIsLargeDevice(false);
  }, [isLargerThan930]);

  return (
    <>
      <DocHead metadata={metadata} />

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
          showFeature
            ? { filter: "blur(5px)", transition: "filter 0.5s ease 0.5s" }
            : { filter: "blur(0px)", transition: "filter 0.5s ease" }
        }
      >
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
      </Flex>

      <Feature project={project} />
    </>
  );
};

export default IndexPage;
