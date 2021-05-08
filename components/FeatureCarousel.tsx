import { Img } from "@chakra-ui/image";
import { Box, Container, Stack } from "@chakra-ui/layout"
import { MotionBox } from "./MotionBox";

type FeatureCarouselProps = {
  media: string[]
}

const hideScrollbar = {
  '&::-webkit-scrollbar': {
    "width": "0 !important",
    "display": "none", 
  },
}

const FeatureCarousel = ({media}: FeatureCarouselProps) => {
  return (
    <Box overflow="hidden" paddingRight={4} paddingLeft={4}>
      <MotionBox>

        <Stack direction="row" overflowX="scroll" whiteSpace="nowrap" sx={{ ...hideScrollbar, scrollSnapType: "x mandatory" }} spacing={4} alignItems="center" cursor="grab" >

        { media.map((image, idx) => {
          return (
            <Box 
              key={idx} 
              bg="gray.400" 
              borderRadius="xl" 
              minWidth="275px" 
              h="185px"   
              sx={{ scrollSnapAlign: "start", scrollPadding: "1.75rem" }} 
              px={6} 
              py={6}
            >
               <Container h="100%" w="100%" p={0} >        
                <Img src={image} objectFit="cover" maxHeight="100%" w="100%" />
              </Container>
            </Box>
          )
        })}

        </Stack>
      </MotionBox>
    </Box>
  )
}

export default FeatureCarousel;