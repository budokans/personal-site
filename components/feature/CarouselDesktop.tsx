import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { hideScrollbar } from "../../styles/utilStyles";
import { MotionStack } from "../Motion";
import { FeatureMedia } from "../../interfaces";
import { ReactElement } from "react";

interface CarouselProps {
  readonly media: readonly FeatureMedia[];
}

export const CarouselDesktop = ({ media }: CarouselProps): ReactElement => {
  return (
    <MotionStack
      drag="x"
      dragConstraints={{ left: media.length === 5 ? -3020 : 0, right: 0 }}
      dragElastic={0.5}
      direction="row"
      alignItems="center"
      spacing={4}
      height="490px"
      whiteSpace="nowrap"
      sx={{ ...hideScrollbar, scrollSnapType: "x mandatory" }}
      cursor="grab"
    >
      {media.map((mediaItem, idx) => {
        return (
          <Box
            key={idx}
            border="1px solid black"
            bg={mediaItem.bg}
            borderRadius="2xl"
            height="100%"
            minWidth="763px"
            sx={{
              scrollSnapAlign: "start",
              scrollPadding: "1.75rem",
            }}
            p="55px"
          >
            <Box sx={{ pointerEvents: "none" }}>
              <Image
                src={mediaItem.path}
                alt={mediaItem.alt}
                height={378}
                width={651}
                priority={idx < 2}
                objectFit="cover"
              />
            </Box>
          </Box>
        );
      })}
    </MotionStack>
  );
};
