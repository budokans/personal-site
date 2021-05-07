import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout"

type FeatureDescriptionProps = {
  url: string
}

const FeatureDescription = ({url}: FeatureDescriptionProps) => {
  return (
    <Box paddingRight={4} paddingLeft={4} mt={8} mb={12} textAlign="center">
      <Button as="a" href={url} rel="noopener noreferrer" target="_blank" fontSize="sm" h={10} px={8} borderRadius="xl" width={48} marginY="0" marginX="auto">
        Visit
      </Button>
    </Box>
  )
}

export default FeatureDescription;