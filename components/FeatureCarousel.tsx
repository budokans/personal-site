import Image from 'next/image'
import { Box, Stack } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query";
import { FeatureMediaInterfaces } from "../interfaces";
import { MotionBox } from "./MotionBox";
import { CSSObject } from '@emotion/serialize';
import FeatureCarousel930px from './FeatureCarousel930px';

const hideScrollbar = {
  '&::-webkit-scrollbar': {
    "width": "0 !important",
    "display": "none", 
  },
}

const disableUserSelect = {
  "WebkitUserSelect": "none",
	"WebkitUserDrag": "none",
	"WebkitAppRegion": "no-drag",
}

type FeatureContainerProps = {
  media: FeatureMediaInterfaces
}

interface HideScrollBarInterface {
  "WebkitUserSelect": string,
	"WebkitUserDrag": string,
	"WebkitAppRegion": string,
}

export type FeatureCarouselProps = {
  media: FeatureMediaInterfaces,
  hideScrollbar: CSSObject,
  disableUserSelect: HideScrollBarInterface,
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

const FeatureCarousel = ({media}: FeatureContainerProps) => {
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");
  

  return (
    <Box overflow="hidden" px={[4, 9]}>
      <MotionBox variants={containerVariants} initial="hidden" animate="visible" >

        { isLargerThan930 ? (
        
        <FeatureCarousel930px 
          media={media} 
          hideScrollbar={hideScrollbar} 
          disableUserSelect={disableUserSelect}
        />
          
      
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

            { media.map((mediaItem, idx) => {
              return (
                <Box 
                  key={idx} 
                  bg={mediaItem.bg}  
                  borderRadius="xl"
                  height="100%"
                  minWidth="calc(70vw + 35px)"
                  sx={{ ...disableUserSelect, scrollSnapAlign: "start", scrollPadding: "1.75rem" }} 
                  p="7.5vw"
                >

                  <Image 
                    src={mediaItem.path}
                    alt={mediaItem.alt} 
                    height={131} 
                    width={211}
                    layout="responsive"
                    className="no-drag"
                  />

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