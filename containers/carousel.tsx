import { ReactElement } from "react";
import { Variants } from "framer-motion";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { CarouselProps } from "types";
import { Feature, Motion } from "components";

export const CarouselContainer = ({ media }: CarouselProps): ReactElement => {
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
    <Box paddingLeft={[4, 9]} overflow="hidden">
      <Motion.MotionBox variants={containerVariants}>
        {isLargerThan930 ? (
          <Feature.CarouselDesktop media={media} />
        ) : (
          <Feature.CarouselMobile media={media} />
        )}
      </Motion.MotionBox>
    </Box>
  );
};
