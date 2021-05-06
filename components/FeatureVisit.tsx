import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout"

type FeatureDescriptionProps = {
  url: string
}

const FeatureDescription = ({url}: FeatureDescriptionProps) => {
  return (
    <Box paddingRight={4} paddingLeft={4} mt={8} mb={12}>
      <Button as="a" href={url} rel="noopener noreferrer" target="_blank">
        Visit
      </Button>
    </Box>
  )
}

export default FeatureDescription;