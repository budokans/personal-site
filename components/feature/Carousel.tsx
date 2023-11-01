import { ReactElement, useState, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import NextImage from "next/image";
import { Motion } from "components";
import { ChildrenProps, FeatureMedia } from "types";

// Resizing a draggable Framer Motion element causes its dragConstraints
// to evaluate to false and this is a known bug. This Carousel component
// implements a modified version of the workaround found at
// https://github.com/framer/motion/issues/1659#issuecomment-1779293386

export const Carousel = ({ children }: ChildrenProps): ReactElement => {
  const [offset, setOffset] = useState(0);
  const [dragTrackScrollWidth, setDragTrackScrollWidth] = useState(0);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const dummyDragAreaRef = useRef<HTMLDivElement | null>(null);

  // Update dummy drag component's UI state dependencies on
  // observable resize to parent element
  useEffect(() => {
    const parent = parentRef.current;
    const content = contentRef.current;

    if (parent && content) {
      const resizeObserver = new ResizeObserver(() => {
        setOffset(content.scrollWidth - content.clientWidth);
        setDragTrackScrollWidth(content.scrollWidth);
      });

      resizeObserver.observe(parent);
      return () => {
        resizeObserver.unobserve(parent);
      };
    }

    return;
  }, []);

  return (
    <Box ref={parentRef} position="relative">
      {/* This is a hack and part of the workaround mentioned above.
      Passing a ref as constraints succeeds where updating the 
      constraints object with state fails.  */}
      <Box
        ref={dummyDragAreaRef}
        position="absolute"
        left={`-${offset}px`}
        width={`${dragTrackScrollWidth}px`}
        pointerEvents="none"
      />

      <Motion.MotionStack
        ref={contentRef}
        drag="x"
        dragConstraints={dummyDragAreaRef}
        direction="row"
        spacing={4}
        whiteSpace="nowrap"
        cursor="grab"
        whileTap={{ cursor: "grabbing" }}
      >
        {children}
      </Motion.MotionStack>
    </Box>
  );
};

interface CarouselImageProps {
  readonly mediaItem: FeatureMedia;
  readonly idx?: number;
}

export const Image = ({ mediaItem }: CarouselImageProps): ReactElement => (
  <Box
    border="1px solid"
    borderColor="gray.200"
    bg={mediaItem.bg}
    borderRadius="2xl"
    height="100%"
    width="85%"
    flexShrink={0}
    p="5%"
  >
    <NextImage
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
  </Box>
);

export const Container = ({ children }: ChildrenProps): ReactElement => (
  <Box paddingX={[4, 9]} overflow="hidden">
    {children}
  </Box>
);
