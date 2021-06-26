import { GetStaticProps } from "next";
import { useFeatureContext } from "../lib/featureContext";
import { ApplicationProps } from "../interfaces";
import { getData } from "../lib/getData";
import DocHead from "../components/DocHead";
import { HomeContainer } from "../containers/home";
import { FeatureContainer } from "../containers/feature";

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
  const { projectToFeature } = useFeatureContext();

  return (
    <>
      <DocHead metadata={metadata} />

      <HomeContainer metadata={metadata} projects={projects} />

      <FeatureContainer project={projects[projectToFeature]} />
    </>
  );
};

export default IndexPage;
