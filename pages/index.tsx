import { Flex  } from "@chakra-ui/layout";
import Header from "../components/Header";

const IndexPage = () => {

  return (
    <Flex direction="column" spacing="15" justifyContent={["flex-start", "center"]} alignItems={["flex-start", "center"]} h="100vh" py={6} px={4}>
      
      <Header />

    </Flex>
  )
}

export default IndexPage;
