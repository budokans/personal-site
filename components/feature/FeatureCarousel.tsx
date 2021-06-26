import { Box, Stack } from "@chakra-ui/layout";
import Image from "next/image";
import { FeatureCarouselProps } from "./FeatureCarouselContainer";

const FeatureCarousel: React.FC<FeatureCarouselProps> = ({
  media,
  hideScrollbar,
  disableUserSelect,
}) => {
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
              ...disableUserSelect,
              scrollSnapAlign: "start",
              scrollPadding: "1.75rem",
            }}
            p="7.5vw"
          >
            <Image
              src={mediaItem.path}
              alt={mediaItem.alt}
              height={131}
              width={211}
              layout="responsive"
              className="no-drag"
              priority={idx < 2}
            />
          </Box>
        );
      })}
    </Stack>
  );
};

export default FeatureCarousel;
