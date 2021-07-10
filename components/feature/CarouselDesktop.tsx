import { Box, Img } from "@chakra-ui/react";
import { hideScrollbar } from "../../styles/utilStyles";
import { MotionStack } from "../Motion";
import { FeatureMediaInterface } from "../../interfaces";

interface CarouselProps {
  media: FeatureMediaInterface[];
}

export const CarouselDesktop: React.FC<CarouselProps> = ({ media }) => {
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
              <Img
                src={mediaItem.path}
                alt={mediaItem.alt}
                height={378}
                width={651}
                objectFit="cover"
              />
            </Box>
          </Box>
        );
      })}
    </MotionStack>
  );
};
