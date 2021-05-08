import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query";

type FeatureDescriptionProps = {
  url: string
}

const FeatureDescription = ({url}: FeatureDescriptionProps) => {
  const [isGreaterThan930] = useMediaQuery("(min-width: 930px)");

  return (
    <Box px={[4, 9]} textAlign={isGreaterThan930 ? "left" : "center"}>
      <Button as="a" href={url} rel="noopener noreferrer" target="_blank" fontSize="sm" h={10} px={8} borderRadius="xl" width={48} marginY="0" marginX="auto">
        Visit
      </Button>
    </Box>
  )
}

export default FeatureDescription;