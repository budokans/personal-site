import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { ProjectInterface } from "../interfaces";

type PortFolioItemProps = {
  project: ProjectInterface;
}

const PortfolioItem = ({project}: PortFolioItemProps) => {
  return (
    <Button>
      <Flex>
        <Image src={project.icon} />
        <Flex>
          <Box>
            <Heading>{project.title}</Heading>
            <Text>{project.shortBlurb}</Text>
          </Box>
        </Flex>
      </Flex>
    </Button>
  )
}

export default PortfolioItem;