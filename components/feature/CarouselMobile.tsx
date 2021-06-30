import { Box, Stack } from "@chakra-ui/layout";
import Image from "next/image";
import { hideScrollbar } from "../../styles/utilStyles";
import { FeatureMediaInterface } from "../../interfaces";

interface CarouselProps {
  media: FeatureMediaInterface[];
}

export const CarouselMobile: React.FC<CarouselProps> = ({ media }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={4}
      height="calc(45vw + 35px)"
      maxH="490px"
      overflowX="scroll"
      whiteSpace="nowrap"
      sx={{ ...hideScrollbar, scrollSnapType: "x mandatory" }}
      cursor="grab"
    >
      {media.map((mediaItem, idx) => {
        return (
          <Box
            key={idx}
            bg={mediaItem.bg}
            borderRadius="xl"
            height="100%"
            minWidth="calc(70vw + 35px)"
            sx={{
              scrollSnapAlign: "start",
              scrollPadding: "1.75rem",
            }}
            p="7.5vw"
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
        );
      })}
    </Stack>
  );
};
