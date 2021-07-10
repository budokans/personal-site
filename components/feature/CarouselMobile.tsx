import { Box, Stack, Img } from "@chakra-ui/react";
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
            minWidth="calc(80vw + 10px)"
            sx={{
              scrollSnapAlign: "start",
              scrollPadding: "1.75rem",
            }}
            p="6vw"
            marginRight={idx === media.length - 1 ? "1rem !important" : "0"}
          >
            <Box sx={{ pointerEvents: "none" }}>
              <Img
                src={mediaItem.path}
                alt={mediaItem.alt}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};
