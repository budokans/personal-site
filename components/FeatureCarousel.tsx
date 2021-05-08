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

        <Stack direction="row" height="calc(45vw + 35px)" maxH="490px" overflowX="scroll" whiteSpace="nowrap" sx={{ ...hideScrollbar, scrollSnapType: "x mandatory" }} spacing={4} alignItems="center" cursor="grab" >

        { media.map((image, idx) => {
          return (
            <Box 
              key={idx} 
              bg="gray.400" 
              borderRadius="xl"
              height="100%"
              minWidth="calc(70vw + 35px)"
              sx={{ scrollSnapAlign: "start", scrollPadding: "1.75rem" }} 
              p="7.5vw"
            >
              <Box h="100%" w="100%" >        
                <Img src={image} objectFit="cover" h="100%" w="100%" />
              </Box>
            </Box>
          )
        })}

        </Stack>
      </MotionBox>
    </Box>
  )
}

export default FeatureCarousel;