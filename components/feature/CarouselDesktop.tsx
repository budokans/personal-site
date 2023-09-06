import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { MotionStack } from "../Motion";
import { ReactElement } from "react";
import { CarouselProps } from "types";

export const CarouselDesktop = ({ media }: CarouselProps): ReactElement => {
  return (
    <MotionStack
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
      {media.map((mediaItem, idx) => {
        return (
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
