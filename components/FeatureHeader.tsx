import { Img } from "@chakra-ui/image"
import { Box, Heading, Stack, Text } from "@chakra-ui/layout"

const FeatureHeader: React.FC = ({project}) => {
  return (
    <Stack display="flex" direction="row" alignItems="center" paddingTop={4} paddingRight={4} paddingLeft={4} spacing={4}>

      <Img src={project.icon} borderRadius="xl" width={16} height={16} />

      <Box>
        <Heading 
          as="h2" 
          fontSize="2xl"
          fontWeight={600}
        >
          {project.title}
        </Heading>

        <Text color="gray.500" fontSize="clamp(12px, 10.8px + 0.25vw, 14px)">{project.shortBlurb}</Text>


      </Box>

    </Stack>
  )
}

export default FeatureHeader;