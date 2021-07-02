import { GetStaticProps } from "next";
import { ApplicationProps } from "../interfaces";
import { getData } from "../lib/getData";
import { DocHead } from "../components/DocHead";
import { HomeContainer } from "../containers/home";

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
  return (
    <>
      <DocHead metadata={metadata} />
      <HomeContainer metadata={metadata} projects={projects} />
    </>
  );
};

export default IndexPage;
