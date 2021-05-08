import { Img } from "@chakra-ui/image";
import { Box, Stack } from "@chakra-ui/layout"
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

const containerVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 20,
    }
  }
}

const FeatureCarousel = ({media}: FeatureCarouselProps) => {
  return (
    <Box overflow="hidden" px={[4, 9]}>
      <MotionBox variants={containerVariants} initial="hidden" animate="visible" >

        <Stack 
          direction="row"
          alignItems="center"
          spacing={4} 
          height="calc(45vw + 35px)" 
          maxH="490px" 
          overflowX="scroll" 
          whiteSpace="nowrap" 
          sx={{ ...hideScrollbar, scrollSnapType: "x mandatory" }} 
          cursor="grab"
        >

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