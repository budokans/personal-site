import { Box } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query";
import { FeatureMediaInterfaces } from "../interfaces";
import { MotionBox } from "./MotionBox";
import { CSSObject } from '@emotion/serialize';
import FeatureCarousel930px from './FeatureCarousel930px';
import FeatureCarousel from './FeatureCarousel';

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
  "userSelect": "none",
  "MozUserSelect": "none",
	"KhtmlUserSelect": "none",
	"OUserSelect": "none",
}

type CarouselContainerProps = {
  media: FeatureMediaInterfaces
}

interface DisableUserSelectInterface {
  "WebkitUserSelect": string,
	"WebkitUserDrag": string,
	"WebkitAppRegion": string,
  "userSelect": string,
  "MozUserSelect": string,
	"KhtmlUserSelect": string,
	"OUserSelect": string,
}

export type FeatureCarouselProps = {
  media: FeatureMediaInterfaces,
  hideScrollbar: CSSObject,
  disableUserSelect: DisableUserSelectInterface,
}

const containerVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 18,
      mass: 1,
    }
  }
}

const FeatureCarouselContainer = ({media}: CarouselContainerProps) => {
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");
  

  return (
    <Box overflow="hidden" px={[4, 9]}>

      <MotionBox 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
      >

        { isLargerThan930 ? (
        
          <FeatureCarousel930px 
            media={media} 
            hideScrollbar={hideScrollbar} 
            disableUserSelect={disableUserSelect}
          />
          
      
        ) : ( 

          <FeatureCarousel 
            media={media} 
            hideScrollbar={hideScrollbar} 
            disableUserSelect={disableUserSelect}
          />

        )}

      </MotionBox>

    </Box>
  )
}

export default FeatureCarouselContainer;