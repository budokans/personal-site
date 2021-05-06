import { GetStaticProps } from "next";
import Head from 'next/head';
import { Flex  } from "@chakra-ui/layout";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import { ProjectDataProps, ProjectInterface } from "../interfaces";
import { getData } from "../lib/getData";
import { useFeatureContext } from "../lib/featureContext";
import Feature from "../components/Feature";

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData();
  return {
    props: {
      data
    }
  }
}

const IndexPage = ({ data }: ProjectDataProps ) => {
  const { projectToFeature } = useFeatureContext();
  const project: ProjectInterface = data[projectToFeature];
  
  return (
    <>
      <Head>
        <title>Steven Webster | Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio and contact details of full-stack developer, Steven Webster"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Flex direction="column" justifyContent={["space-between", "center"]} alignItems="center" minHeight="100vh" py={8} px={4} maxW={["100%", "930px" ]} marginY="0" marginX="auto">

        <Header />

        <Portfolio data={data} />

      </Flex>

  
      <Feature project={project} />
    </>
  )
}

export default IndexPage;
