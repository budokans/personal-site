import { Badge, Box, Heading, Stack } from "@chakra-ui/layout"

type FeatureTechProps = {
  tech: string[]
}

const hideScrollbar = {
  '&::-webkit-scrollbar': {
    "width": "0 !important",
    "display": "none", 
  },
}

const FeatureTech = ({tech}: FeatureTechProps) => {
  return (
    <Box overflow="hidden" px={[4, 9]} >

      <Heading 
        as="h5" 
        fontSize="clamp(11px, 10.4px + 0.13vw, 12px);" 
        fontWeight="400" 
        opacity="0.75" 
        textTransform="uppercase" 
        mb={3} 
      >
        Tech
      </Heading>

      <Stack direction="row" overflowX="auto" whiteSpace="nowrap" sx={hideScrollbar}>

        { tech.map((tech, idx) => {
          return (
            <Box key={idx}>
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
  )
}

export default FeatureTech;