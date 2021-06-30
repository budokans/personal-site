import { Box } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { FeatureMediaInterface } from "../interfaces";
import { MotionBox } from "../components/Motion";
import { CarouselDesktop } from "../components/feature/CarouselDesktop";
import { CarouselMobile } from "../components/feature/CarouselMobile";

type CarouselContainerProps = {
  media: FeatureMediaInterface[];
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

export const CarouselContainer: React.FC<CarouselContainerProps> = ({
  media,
}) => {
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");

  return (
    <Box overflow="hidden" px={[4, 9]}>
      <MotionBox variants={containerVariants}>
        {isLargerThan930 ? (
          <CarouselDesktop media={media} />
        ) : (
          <CarouselMobile media={media} />
        )}
      </MotionBox>
    </Box>
  );
};
