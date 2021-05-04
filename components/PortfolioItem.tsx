import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { ProjectInterface } from "../interfaces";

type PortFolioItemProps = {
  project: ProjectInterface;
  idx: number;
}

const PortfolioItem = ({project, idx}: PortFolioItemProps) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

  const afterStyle = isLargerThan768 && idx > 1 ? undefined : idx > 2 ? undefined : { background: "gray.300", position: "absolute", content: `""`, bottom: "-17px", width: "100%", height: "1px", display: "block"};

  return (
    <Box role="button" position="relative">
      <Flex role="group" direction="row">

        <Image src={project.icon} boxSize={16} objectFit="cover" rounded="xl" alt={`${project.title} icon`} mr={[3, 4]} />

        <Flex position="relative" alignItems="center" _after={afterStyle}>

          <Box mr={4}>
            <Heading as="h3" fontSize="md" fontWeight="normal" lineHeight="tall">{project.title}</Heading>
            <Text fontSize={["xs", "sm"]} color="#595959" noOfLines={2}>{project.shortBlurb}</Text>
          </Box>

          <Button rounded="xl" fontSize="sm" w={8} px={3} h={7} minW={16}>View</Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default PortfolioItem;