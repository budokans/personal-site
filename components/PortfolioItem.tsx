import { Button } from "@chakra-ui/button";
import { Img } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useEffect, useState } from "react";
import { ProjectInterface } from "../interfaces";
import { useFeatureContext } from "../lib/featureContext";

type PortFolioItemProps = {
  project: ProjectInterface;
  idx: number;
}

const PortfolioItem = ({project, idx}: PortFolioItemProps) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [afterStyle, setAfterStyle] = useState({});
  const { openFeature } = useFeatureContext();

  useEffect(() => {
    if (isLargerThan768 && idx > 1) {
      setAfterStyle({})
    } else if (idx > 2) {
      setAfterStyle({})
    } else {
      setAfterStyle({ background: "gray.300", position: "absolute", content: `""`, bottom: "-17px", width: "100%", height: "1px", display: "block"})
    }
  }, [isLargerThan768])

  const handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLDivElement
  > = (): void => {
    openFeature(idx);
  }

  return (
    <Box role="button" position="relative" onClick={handleClick}>
      <Flex role="group" direction="row">

        <Img 
          src={project.icon}
          alt={`${project.title} icon`}
          boxSize={16} 
          objectFit="cover"
          rounded="xl"
          mr={[3, 4]} 
        />

        <Flex position="relative" alignItems="center" _after={afterStyle}>

          <Box mr={4}>

            <Heading 
              as="h3" 
              fontSize="md" 
              fontWeight="normal" 
              lineHeight="tall"
            >
              {project.title}
            </Heading>

            <Text 
              fontSize="clamp(12px, 10.8px + 0.25vw, 14px)" 
              color="#595959" 
              noOfLines={2}
            >
              {project.shortBlurb}
            </Text>
          </Box>

          <Button 
            rounded="xl" 
            fontSize="sm" 
            w={8} 
            px={3} 
            h={7} 
            minW={16}
          >
            View
          </Button>

        </Flex>

      </Flex>
      
    </Box>
  )
}

export default PortfolioItem;