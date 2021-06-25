import { GetStaticProps } from "next";
import { Flex } from "@chakra-ui/layout";
import { useFeatureContext } from "../lib/featureContext";
import { ApplicationProps } from "../interfaces";
import { getData } from "../lib/getData";
import DocHead from "../components/DocHead";
import { Header, HeaderText } from "../components/Header";
import Portfolio from "../components/Portfolio";
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
        <Header metadata={metadata}>
          <HeaderText>{metadata.description}</HeaderText>
        </Header>

        <Portfolio data={projects} />
      </Flex>

      <Feature project={project} />
    </>
  );
};

export default IndexPage;
