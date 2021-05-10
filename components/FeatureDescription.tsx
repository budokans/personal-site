import { Box, Text } from "@chakra-ui/layout"
import { ProjectInterface } from "../interfaces";

type FeatureDescriptionProps = {
  project: ProjectInterface
}

const FeatureDescription = ({project}: FeatureDescriptionProps) => {
  return (
    <Box px={[4, 9]} maxW={["100%", "100%", "70%"]}>

      {project.description.map((paragraph, idx) => {
        return (
        <Text 
          fontSize="clamp(14px, 11.6px + 0.5vw, 18px)"
          key={idx}
          my={[3, 5]}
          lineHeight={1.7}
        >
          {paragraph}
        </Text>
        )
      })}

    </Box>
  )
}

export default FeatureDescription;