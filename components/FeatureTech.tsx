import { Badge, Box, Heading, Stack } from "@chakra-ui/layout"
import { ProjectInterface } from "../interfaces"

type FeatureTechProps = {
  project: ProjectInterface
}

const hideScrollbar = {
  '&::-webkit-scrollbar': {
    width: "0 !important",
    display: "none", 
  },
  // '&::-webkit-scrollbar-track': {
  //   width: '6px',
  // },
  // '&::-webkit-scrollbar-thumb': {
  //   background: scrollbarColor,
  //   borderRadius: '24px',
  // },
  'scrollbar-width': 'none'
}

const FeatureTech = ({project}: FeatureTechProps) => {
  return (
    <Stack>
      <Box overflow="hidden" paddingRight={4} paddingLeft={4}>

        <Heading as="h5" fontSize="clamp(11px, 10.4px + 0.13vw, 12px);" fontWeight="400" opacity="0.75" textTransform="uppercase" mb={3} >Tech</Heading>

        <Stack direction="row" overflowX="auto" whiteSpace="nowrap" css={hideScrollbar}>
          
          { project.tech.map((tech) => {
            return (
              <Box mr={2}>
                <Badge 
                  variant="outline" 
                  borderWidth="0px" 
                  borderRadius="xl" 
                  border="1px solid" 
                  borderColor="gray.300" 
                  boxShadow="0" 
                  px={5} 
                  py={4} 
                  textTransform="none" 
                  color="gray.800" 
                  fontSize="sm" 
                  fontWeight="normal"
                >   
                  {tech}
                </Badge>
              </Box>
            )
          })}
        </Stack>

      </Box>

    </Stack>
  )
}

export default FeatureTech;