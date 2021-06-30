import { Box } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { FeatureMediaInterface } from "../../interfaces";
import { MotionBox } from "../Motion";
import { CSSObject } from "@emotion/serialize";
import FeatureCarousel930px from "./FeatureCarousel930px";
import FeatureCarousel from "./FeatureCarousel";

const hideScrollbar = {
  "&::-webkit-scrollbar": {
    width: "0 !important",
    display: "none",
  },
};

type CarouselContainerProps = {
  media: FeatureMediaInterface[];
};

export type FeatureCarouselProps = {
  media: FeatureMediaInterface[];
  hideScrollbar: CSSObject;
};

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
    },
  },
};

const FeatureCarouselContainer: React.FC<CarouselContainerProps> = ({
  media,
}) => {
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");

  return (
    <Box overflow="hidden" px={[4, 9]}>
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {isLargerThan930 ? (
          <FeatureCarousel930px media={media} hideScrollbar={hideScrollbar} />
        ) : (
          <FeatureCarousel media={media} hideScrollbar={hideScrollbar} />
        )}
      </MotionBox>
    </Box>
  );
};

export default FeatureCarouselContainer;
