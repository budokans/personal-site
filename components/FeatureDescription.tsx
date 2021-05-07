import { Box, Text } from "@chakra-ui/layout"
import { ProjectInterface } from "../interfaces";

type FeatureDescriptionProps = {
  project: ProjectInterface
}

const FeatureDescription = ({project}: FeatureDescriptionProps) => {
  return (
    <Box paddingRight={4} paddingLeft={4} mt={6}>
      <Text fontSize="clamp(14px, 11.6px + 0.5vw, 18px)">
        {project.description}
      </Text>
    </Box>
  )
}

export default FeatureDescription;