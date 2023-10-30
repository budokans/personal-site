import { ReactElement, useState, useCallback } from "react";
import { Box, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { Motion } from "components";
import { FeatureMedia } from "types";
import { hideScrollbar } from "styles/utilStyles";

export interface CarouselProps {
  readonly media: readonly FeatureMedia[];
}

export const Desktop = ({ media }: CarouselProps): ReactElement => {
  const [offset, setOffset] = useState(0);

  const contentRef = useCallback((node: HTMLElement | null) => {
    node && setOffset(node.scrollWidth - node.clientWidth);
  }, []);

  return (
    <Motion.MotionStack
      drag="x"
      dragConstraints={{
        left: -offset,
        right: 0,
      }}
      direction="row"
      spacing={4}
      whiteSpace="nowrap"
      cursor="grab"
      whileTap={{ cursor: "grabbing" }}
      ref={contentRef}
    >
      {media.map((mediaItem, idx) => (
        <Box
          key={idx}
          border="1px solid"
          borderColor="gray.200"
          bg={mediaItem.bg}
          borderRadius="2xl"
          height="100%"
          width="85%"
          flexShrink={0}
          p="55px"
        >
          <CarouselImage mediaItem={mediaItem} idx={idx} />
        </Box>
      ))}
    </Motion.MotionStack>
  );
};

export const Mobile = ({ media }: CarouselProps): ReactElement => (
  <Stack
    direction="row"
    spacing={4}
    overflowX="scroll"
    sx={hideScrollbar}
    scrollSnapType="x mandatory"
    scrollPadding={4}
    pl={4}
    mx={-4}
  >
    {media.map((mediaItem, idx) => (
      <Box
        key={idx}
        bg={mediaItem.bg}
        borderRadius="xl"
        height="100%"
        width="85%"
        flexShrink={0}
        scrollSnapAlign="start"
        p="6vw"
        marginRight={idx === media.length - 1 ? "1rem !important" : "0"}
      >
        <CarouselImage mediaItem={mediaItem} />
      </Box>
    ))}
  </Stack>
);

interface CarouselImageProps {
  readonly mediaItem: FeatureMedia;
  readonly idx?: number;
}

const CarouselImage = ({ mediaItem }: CarouselImageProps): ReactElement => (
  <Image
    src={mediaItem.path}
    alt={mediaItem.alt}
    height={378}
    width={651}
    priority
    style={{
      objectFit: "cover",
      pointerEvents: "none",
    }}
  />
);
