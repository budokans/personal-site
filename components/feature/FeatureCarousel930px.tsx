import { Box } from "@chakra-ui/layout";
import { MotionStack } from "../Motion";

import Image from "next/image";
import { FeatureCarouselProps } from "./FeatureCarouselContainer";

const FeatureCarousel930px: React.FC<FeatureCarouselProps> = ({
  media,
  hideScrollbar,
  disableUserSelect,
}) => {
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
            sx={{ scrollSnapAlign: "start", scrollPadding: "1.75rem" }}
            p="55px"
          >
            <Box sx={disableUserSelect}>
              <Image
                src={mediaItem.path}
                alt={mediaItem.alt}
                height={378}
                width={651}
                className="no-drag"
                priority={idx < 2}
              />
            </Box>
          </Box>
        );
      })}
    </MotionStack>
  );
};

export default FeatureCarousel930px;
