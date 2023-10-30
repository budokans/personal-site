import { ReactElement } from "react";
import { Variants } from "framer-motion";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { Feature, Motion } from "components";

export const CarouselContainer = ({
  media,
}: Feature.Carousel.CarouselProps): ReactElement => {
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");

  const containerVariants: Variants = {
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

  return (
    <Box paddingX={[4, 9]} overflow="hidden">
      <Motion.MotionBox variants={containerVariants}>
        {isLargerThan930 ? (
          <Feature.Carousel.Desktop media={media} />
        ) : (
          <Feature.Carousel.Mobile media={media} />
        )}
      </Motion.MotionBox>
    </Box>
  );
};
