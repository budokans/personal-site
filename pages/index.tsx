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
    <Flex direction="column" justifyContent={["space-between", "center"]} alignItems="center" h={["100%", "100vh"]} py={6} px={4} maxW={["100%", "930px" ]}marginY="0" marginX="auto">

      <Header />

      <Portfolio data={data} />

    </Flex>
  )
}

export default IndexPage;
