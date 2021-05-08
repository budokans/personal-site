import { Img } from "@chakra-ui/image";
import { Box, Stack } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query";
import { motion } from "framer-motion";
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

const disableUserSelect = {
  "-webkit-user-select": "none",
	"-webkit-user-drag": "none",
	"-webkit-app-region": "noDrag",
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
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");
  const MotionStack = motion(Stack)

  return (
    <Box overflow="hidden" px={[4, 9]}>
      <MotionBox variants={containerVariants} initial="hidden" animate="visible" >

        { isLargerThan930 ? (
          <Box>
            <MotionStack
              drag="x"
              dragConstraints={{left: -3800, right: 0}}
              dragElastic={0.5}
              direction="row"
              alignItems="center"
              spacing={4} 
              height="490px"
              whiteSpace="nowrap" 
              sx={{ ...hideScrollbar, scrollSnapType: "x mandatory" }} 
              cursor="grab"
            >
              { media.map((image, idx) => {
                return (
                  <Box 
                    key={idx} 
                    border="1px solid black"
                    bg="gray.400" 
                    borderRadius="2xl"
                    height="100%"
                    minWidth="763px"
                    sx={{ scrollSnapAlign: "start", scrollPadding: "1.75rem" }} 
                    p="7.5vw"
                  >
                    <Box h="100%" w="100%" >        
                      <Img src={image} objectFit="cover" h="100%" w="100%" sx={disableUserSelect} />
                    </Box>
                  </Box>
                )
              })}
            </MotionStack>
          </Box>
      
        ) : ( 
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
        )}
      </MotionBox>
    </Box>
  )
}

export default FeatureCarousel;