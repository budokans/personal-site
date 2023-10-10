import { ReactElement } from "react";
import { Box, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { hideScrollbar } from "styles/utilStyles";
import { CarouselProps } from "types";

export const CarouselMobile = ({ media }: CarouselProps): ReactElement => (
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
        <Box sx={{ pointerEvents: "none" }}>
          <Image
            src={mediaItem.path}
            alt={mediaItem.alt}
            height={135}
            width={233}
            objectFit="cover"
            layout="responsive"
            priority={idx < 2}
          />
        </Box>
      </Box>
    ))}
  </Stack>
);
