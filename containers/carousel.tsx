import { Box, useMediaQuery } from "@chakra-ui/react";
import { CarouselProps } from "../interfaces";
import { MotionBox } from "../components/Motion";
import { CarouselDesktop } from "../components/feature";
import { CarouselMobile } from "../components/feature";
import { ReactElement } from "react";

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

export const CarouselContainer = ({ media }: CarouselProps): ReactElement => {
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");

  return (
    <Box paddingLeft={[4, 9]} overflow="hidden">
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
