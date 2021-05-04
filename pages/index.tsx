import { GetStaticProps } from "next";
import { Flex  } from "@chakra-ui/layout";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import { ProjectDataProps } from "../interfaces";
import { getData } from "../lib/getData";

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData();
  return {
    props: {
      data
    }
  }
}

const IndexPage = ({ data }: ProjectDataProps ) => {
  
  return (
    <Flex direction="column" spacing="15" justifyContent={["flex-start", "center"]} alignItems={["flex-start", "center"]} h="100vh" py={6} px={4}>

      <Header />

      <Portfolio data={data} />

    </Flex>
  )
}

export default IndexPage;
