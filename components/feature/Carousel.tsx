import { ReactElement } from "react";
import { Box, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { Motion } from "components";
import { FeatureMedia } from "types";
import { hideScrollbar } from "styles/utilStyles";

export interface CarouselProps {
  readonly media: readonly FeatureMedia[];
}

export const Desktop = ({ media }: CarouselProps): ReactElement => (
  <Motion.MotionStack
    drag="x"
    dragConstraints={{ left: media.length === 5 ? -3020 : 0, right: 0 }}
    direction="row"
    alignItems="center"
    spacing={4}
    height="490px"
    whiteSpace="nowrap"
    cursor="grab"
    whileTap={{ cursor: "grabbing" }}
  >
    {media.map((mediaItem, idx) => (
      <Box
        key={idx}
        border="1px solid"
        borderColor="gray.200"
        bg={mediaItem.bg}
        borderRadius="2xl"
        height="100%"
        minWidth="763px"
        p="55px"
      >
        <CarouselImage mediaItem={mediaItem} idx={idx} />
      </Box>
    ))}
  </Motion.MotionStack>
);

export const Mobile = ({ media }: CarouselProps): ReactElement => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={4}
    maxH="490px"
    overflowX="scroll"
    whiteSpace="nowrap"
    sx={{ ...hideScrollbar, scrollSnapType: "x mandatory" }}
  >
    {media.map((mediaItem, idx) => (
      <Box
        key={idx}
        bg={mediaItem.bg}
        borderRadius="xl"
        height="100%"
        minWidth="calc(80vw + 10px)"
        sx={{
          scrollSnapAlign: "start",
          scrollPadding: "1.75rem",
        }}
        p="6vw"
        marginRight={idx === media.length - 1 ? "1rem !important" : "0"}
      >
        <CarouselImage mediaItem={mediaItem} idx={idx} />
      </Box>
    ))}
  </Stack>
);

interface CarouselImageProps {
  readonly mediaItem: FeatureMedia;
  readonly idx: number;
}

const CarouselImage = ({
  mediaItem,
  idx,
}: CarouselImageProps): ReactElement => (
  <Image
    src={mediaItem.path}
    alt={mediaItem.alt}
    height={378}
    width={651}
    priority={idx < 2}
    style={{
      objectFit: "cover",
      width: "100%",
      height: "auto",
      pointerEvents: "none",
    }}
  />
);
