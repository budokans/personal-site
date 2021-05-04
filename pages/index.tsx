import {promises as fs } from "fs";
import path from 'path';
import { GetStaticProps } from "next";
import { Flex  } from "@chakra-ui/layout";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";

export const getStaticProps: GetStaticProps = async () => {
  const dataDirectory = path.join(process.cwd(), 'data');
  const filenames = await fs.readdir(dataDirectory);

  const data = filenames.map(async (filename) => {
    const filePath = path.join(dataDirectory, filename);
    const fileContents = await fs.readFile(filePath, 'utf8');
  
    return JSON.parse(fileContents);
  })

  return {
    props: {
      data: await Promise.all(data)
    }
  }
}

const IndexPage = ({data}) => {

  return (
    <Flex direction="column" spacing="15" justifyContent={["flex-start", "center"]} alignItems={["flex-start", "center"]} h="100vh" py={6} px={4}>

      <Header />

      <Portfolio data={data} />

    </Flex>
  )
}

export default IndexPage;
